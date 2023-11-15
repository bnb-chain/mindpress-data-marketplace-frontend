import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { getBucketList, getGroupInfoByName } from '../utils/gfSDK';
import { generateGroupName } from '../utils';
import { useListedStatus } from './useListedStatus';
import { getItemByGroupId } from '../utils/apis';

export const useCollectionList = (
  page: number,
  pageSize = 10,
  updateTag: object,
) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  const { address } = useAccount();

  const { checkListed } = useListedStatus();

  useEffect(() => {
    if (address && page && pageSize) {
      setLoading(true);
      getBucketList(address as string)
        .then(async (result: any) => {
          const { statusCode, body } = result;
          if (statusCode == 200 && Array.isArray(body)) {
            const t = body
              .filter((item: any) => !item.removed)
              .slice((page - 1) * pageSize, page * pageSize)
              .map(async (item) => {
                try {
                  const {
                    bucket_info: { bucket_name },
                  } = item;
                  const groupName = generateGroupName(bucket_name);
                  const { groupInfo } = await getGroupInfoByName(
                    groupName,
                    address as string,
                  );
                  if (!groupInfo) return item;
                  const { id } = groupInfo;
                  // const result = await checkListed(id);
                  // const { totalSale } = await getItemDetail(id);
                  const [result, { totalSale }] = await Promise.all([
                    checkListed(id),
                    getItemByGroupId(id),
                  ]);
                  return {
                    ...item,
                    groupId: id,
                    listed: !!result,
                    totalVol: totalSale || '0',
                  };
                } catch (e) {
                  console.log(e, item);
                }
                return false;
              })
              .filter((item) => item);
            const res: any = await Promise.all(t);
            setList(res);
            setTotal(body.length);
          } else {
            setLoading(false);
          }
        })
        .catch(() => {
          setList([]);
          setTotal(0);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [address, checkListed, page, pageSize, updateTag]);
  return { loading, list, total };
};
