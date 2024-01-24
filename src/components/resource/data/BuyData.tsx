import { useModal as useWalletKitModal } from '@node-real/walletkit';
import { Box, Flex } from '@totejs/uikit';
import { useAccount } from 'wagmi';
import { useModal } from '../../../hooks/useModal';
import { Item } from '../../../utils/apis/types';
import { LockIcon } from '../../svgIcon/LockIcon';
import { buyAtom } from '../../../atoms/buyAtom';
import { useSetAtom } from 'jotai';
import { useImmerAtom } from 'jotai-immer';

interface Props {
  itemInfo: Item;
}

export const BuyData = (props: Props) => {
  const { itemInfo } = props;
  const { isConnected, isConnecting } = useAccount();
  const modalData = useModal();
  const { onOpen } = useWalletKitModal();
  const [, setBuy] = useImmerAtom(buyAtom);

  return (
    <Box bg="#1E2026" w="590px" borderRadius="16px">
      <Flex mt="32px" p="75px 125px" direction="column" alignItems="center">
        <Flex
          w="88px"
          h="88px"
          bg="#181A1E"
          justifyContent="center"
          alignItems="center"
          borderRadius="88px"
          border="15px solid #373943"
        >
          <LockIcon w={32} h={32} />
        </Flex>

        <Box
          as="p"
          mt="30px"
          color="#C4C5CB"
          fontSize="16px"
          textAlign="center"
        >
          After you{' '}
          <Box
            as="button"
            color="#FFE900"
            onClick={() => {
              if (!isConnected && !isConnecting) {
                onOpen();
              } else {
                setBuy((draft) => {
                  draft.openDrawer = true;
                  draft.buying = false;
                  draft.buyData = itemInfo;
                });
              }
            }}
          >
            purchase
          </Box>{' '}
          the data, you can view <br /> and download.
        </Box>
      </Flex>
    </Box>
  );
};
