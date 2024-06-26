import { Box } from '@totejs/uikit';
import { useGetCategoryList } from '../../hooks/apis/useGetCategoryList';
import { MindPressMasmonry } from '../ui/masmonry';
import { Desc } from './desc';
import { useGetCategory } from '../../hooks/apis/useGetCatoriesMap';
import { Empty } from './empty';
import { Loader } from '../Loader';

interface Props {
  cid: string;
}

export const Category: React.FC<Props> = ({ cid }) => {
  const { data: res, isPending } = useGetCategoryList(cid);
  const category = useGetCategory(Number(cid));

  if (isPending) {
    return <Loader />;
  }

  if (res?.total === 0) {
    return <Empty text={category?.name || ''} />;
  }

  return (
    <>
      <Desc text={category?.name || ''} total={res?.total || 0} />
      <Box mt="40px">
        <MindPressMasmonry list={res?.flatData} hasMore={false} />
      </Box>
    </>
  );
};
