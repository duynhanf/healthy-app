import { healthyApi } from '@healthy-app/utils/api';
import { Column } from '@healthy-app/models/column';

export interface GetColumnsParams {
  startRow?: number;
  endRow?: number;
}

const getColumns = ({
  startRow,
  endRow,
}: GetColumnsParams): Promise<Column[]> =>
  healthyApi
    .get('/columns', {
      params: { startRow, endRow },
    })
    .then((res) => res.data);

const columnService = {
  getColumns,
};

export default columnService;
