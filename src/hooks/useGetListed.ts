// import { useCallback, useState, useEffect } from 'react';
// import { useGetChainProviders } from './useGetChainProviders';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAccount } from 'wagmi';
// import { MarketPlaceContract } from '../base/contract/marketPlaceContract';
// import { headGroupNFT } from '../utils/gfSDK';
import { parseGroupName } from '../utils';
import { getListedList } from '../utils/http';

// export const useGetListed = (realAddress?: string, page = 0, pageSize = 10) => {
//   const [list, setList] = useState(<any>[]);
//   const [loading, setLoading] = useState(true);
//   const [total, setTotal] = useState(0);

//   const { address: walletAddress } = useAccount();

//   const address = useMemo(() => {
//     return realAddress || walletAddress;
//   }, [walletAddress, realAddress]);

//   const getList = useCallback(async () => {
//     setLoading(true);
//     const list = await MarketPlaceContract(false)
//       .methods.getListed((page - 1) * pageSize, pageSize)
//       .call();
//     const { _ids, _dates, _totalLength } = list;
//     if (Array.isArray(_ids)) {
//       const t = _ids.map((item: any) => {
//         return headGroupNFT(item);
//       });
//       let result = await Promise.all(t);
//       result = result
//         .map((item: any, index) => {
//           if (!Object.keys(item).length) return false;
//           const {
//             metaData: { attributes, groupName },
//           } = item;
//           const [owner, , , , extra] = attributes;
//           const { type, name } = parseGroupName(groupName);
//           const { price, url } = JSON.parse(extra.value);

//           return {
//             ...item,
//             name,
//             groupName,
//             type,
//             ownerAddress: owner.value,
//             price,
//             url,
//             id: _ids[index],
//             listTime: _dates[index],
//           };
//         })
//         .filter((item) => item);
//       setList(result);
//       setTotal(_totalLength);
//     } else {
//       setList([]);
//     }
//     setLoading(false);
//   }, [address, page, pageSize]);
//   useEffect(() => {
//     getList();
//   }, [address, page, pageSize]);
//   return { loading, list, total };
// };

export const useGetListed = (realAddress?: string, page = 0, pageSize = 10) => {
  const [list, setList] = useState(<any>[]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  const { address: walletAddress } = useAccount();

  const address = useMemo(() => {
    return realAddress || walletAddress;
  }, [walletAddress, realAddress]);

  const getList = useCallback(async () => {
    setLoading(true);

    const list = await getListedList({
      filter: {
        address: '',
        keyword: '',
      },
      offset: (page - 1) * pageSize,
      limit: pageSize,
      sort: 'CREATION_DESC',
    });
    const { items, total } = list;
    if (Array.isArray(items)) {
      let result: any = [];
      result = items
        .map((item: any) => {
          if (!Object.keys(item).length) return false;
          const { type, name } = parseGroupName(item.groupName);
          return {
            ...item,
            type,
            name,
            id: item.groupId,
            listTime: item.createdAt,
            metaData: { groupName: item.groupName },
            totalVol: item.totalSale || '0',
          };
        })
        .filter((item) => item);
      setList(result);
      setTotal(total);
    } else {
      setList([]);
    }
    setLoading(false);
  }, [address, page, pageSize]);
  useEffect(() => {
    getList();
  }, [address, page, pageSize]);
  return { loading, list, total, getList };
};
