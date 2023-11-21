import styled from '@emotion/styled';
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
} from '@totejs/uikit';
import BN from 'bn.js';
import { useEffect, useMemo, useState } from 'react';
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi';
import { MarketPlaceContract } from '../../base/contract/marketPlaceContract';
import {
  BSC_CHAIN_ID,
  BSC_SEND_GAS_FEE,
  LIST_ESTIMATE_FEE_ON_BSC,
  NETWORK,
} from '../../env';
import { useApprove } from '../../hooks/useApprove';
import { useChainBalance } from '../../hooks/useChainBalance';
import { useCollectionItems } from '../../hooks/useCollectionItems';
import { useDelist } from '../../hooks/useDelist';
import { useHasRole } from '../../hooks/useHasRole';
import { useModal } from '../../hooks/useModal';
import { defaultImg, divide10Exp, formatDateUTC, roundFun } from '../../utils';

export const DelistModal = (props: any) => {
  const modalData = useModal();
  const { address } = useAccount();
  const { isOpen, handleOpen } = props;

  const { delistData }: { delistData: any } = modalData.modalState;

  const { object_name, create_at, bucket_name, groupId } = delistData;

  const name = bucket_name;
  const type = object_name ? 'Data' : 'Collection';

  const { num } = useCollectionItems(name, false);

  const { BscBalanceVal } = useChainBalance();

  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const { hasRole, setHasRole } = useHasRole();

  const { Approve } = useApprove();

  const { delist } = useDelist();

  const [loading, setLoading] = useState(false);

  const BSC_FEE_SUFF = useMemo(() => {
    return Number(BscBalanceVal) >= LIST_ESTIMATE_FEE_ON_BSC;
  }, [BscBalanceVal]);

  const [estimateGas, setEstimateGas] = useState('0');
  useEffect(() => {
    if (!groupId) return;

    const estimate = async () => {
      const gasPrice = BSC_SEND_GAS_FEE || '';
      const gasLimit = await MarketPlaceContract()
        .methods.delist(groupId)
        .estimateGas({
          from: address,
          gas: BSC_SEND_GAS_FEE,
        });

      const tmp = BigInt(gasPrice) * BigInt(gasLimit);
      const estimateGasRes = divide10Exp(new BN(tmp.toString(), 10), 18);
      console.log('estimateGas', estimateGasRes);

      setEstimateGas(estimateGasRes);
    };

    estimate();
  }, [address, groupId]);

  return (
    <Container isOpen={isOpen} onClose={handleOpen}>
      <ModalCloseButton />
      <Header>Delist</Header>
      <CustomBody>
        <Box h={10}></Box>
        <InfoCon gap={26} justifyContent={'flex-start'} alignItems={'center'}>
          <ImgCon>
            <img src={defaultImg(name, 80)} alt="" />
          </ImgCon>
          <BaseInfo flexDirection={'column'} alignItems={'flex-start'}>
            <ResourceNameCon alignItems={'center'}>
              {name}
              {type === 'Collection' ? (
                <Tag justifyContent={'center'} alignItems={'center'}>
                  Data collection
                </Tag>
              ) : null}
            </ResourceNameCon>
            {type !== 'Collection' ? (
              <FileInfo gap={12}>
                <div>
                  Collection <span>{bucket_name}</span>
                </div>
              </FileInfo>
            ) : (
              <ResourceNum gap={4}>
                {num} Items created at
                {create_at ? (
                  <CreateTime>{formatDateUTC(create_at * 1000)}</CreateTime>
                ) : null}
              </ResourceNum>
            )}
          </BaseInfo>
        </InfoCon>
        <Box h={10}></Box>
        <BuyInfo>
          <ItemCon justifyContent={'space-between'}>
            <ItemTitle>Estimate Gas</ItemTitle>
            <ItemVal>{estimateGas} BNB</ItemVal>
          </ItemCon>
          <ItemCon alignItems={'flex-end'} justifyContent={'space-between'}>
            <ItemTitle>Balance on BSC {NETWORK}</ItemTitle>
            <ItemVal> {roundFun(BscBalanceVal, 8)} BNB </ItemVal>
          </ItemCon>
        </BuyInfo>
      </CustomBody>
      {!BSC_FEE_SUFF && <BalanceWarn>Insufficient Balance</BalanceWarn>}
      <ModalFooter>
        {chain && chain.id === BSC_CHAIN_ID && !hasRole && (
          <Button
            width={'50%'}
            onClick={async () => {
              await Approve();
              setHasRole(true);
            }}
            disabled={!BSC_FEE_SUFF}
          >
            Approve
          </Button>
        )}
        {chain && chain.id === BSC_CHAIN_ID && hasRole && (
          <Button
            width={'50%'}
            onClick={async () => {
              let tmp = {};
              try {
                setLoading(true);
                const result = await delist(groupId);
                const { status, transactionHash } = result as any;
                const success = status && transactionHash;
                tmp = {
                  variant: success ? 'success' : 'error',
                  description: success ? 'Delist successful' : 'Delist failed',
                };
              } catch (e: any) {
                tmp = {
                  variant: 'error',
                  description: e.message ? e.message : 'Delist failed',
                };
                setLoading(false);
              }
              modalData.modalDispatch({
                type: 'OPEN_RESULT',
                result: tmp,
              });
              setLoading(false);

              if (modalData.modalState.callBack) {
                modalData.modalState.callBack();
              }
            }}
            disabled={!BSC_FEE_SUFF || loading}
            isLoading={loading}
          >
            Delist
          </Button>
        )}
        {chain && chain.id !== BSC_CHAIN_ID ? (
          <Button
            width={'100%'}
            onClick={() => {
              switchNetwork?.(BSC_CHAIN_ID);
            }}
          >
            Switch to Bsc {NETWORK}
          </Button>
        ) : null}
        <Cancel width={'50%'} onClick={handleOpen} variant="ghost">
          Cancel
        </Cancel>
      </ModalFooter>
    </Container>
  );
};

const Container = styled(Modal)`
  .ui-modal-content {
    background: #ffffff;
  }
`;

const Header = styled(ModalHeader)`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const CustomBody = styled(ModalBody)`
  height: 200px;
`;

const InfoCon = styled(Flex)``;

const BaseInfo = styled(Flex)``;

const ImgCon = styled.div`
  width: 80px;
  height: 80px;

  img {
    background: #d9d9d9;
    border-radius: 8px;
  }
`;
const ResourceNameCon = styled(Flex)`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;

  color: #5f6368;
`;

const CreateTime = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 28px;
`;
const Tag = styled(Flex)`
  margin-left: 16px;

  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 28px;

  width: 73px;
  height: 16px;

  background: #d9d9d9;

  border-radius: 16px;
`;
const ResourceNum = styled(Flex)`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;

  color: #000000;
`;

const FileInfo = styled(Flex)`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;

  color: #979797;
  div {
    display: flex;
    gap: 2px;
  }
  span {
    color: #181a1e;
  }
`;

const BuyInfo = styled.div`
  margin-top: 60px;
`;

const ItemCon = styled(Flex)``;

const ItemTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;

  color: #1e2026;
`;

const ItemVal = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  color: #1e2026;
`;

const BalanceWarn = styled(Flex)`
  position: absolute;

  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 18px;
  /* identical to box height, or 180% */
  bottom: 90px;
  color: #ff6058;
`;

const Cancel = styled(Button)`
  color: #1e2026;
  &:hover {
    color: ${(props: any) => props.theme.colors.readable.normal};
  }
`;
