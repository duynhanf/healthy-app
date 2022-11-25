import { FoodHistory } from '@healthy-app/models/food';
import { healthyApi } from '@healthy-app/utils/api';

export interface GetOrdersParams {
  startRow?: number;
  endRow?: number;
}

const getFoodHistories = ({
  startRow,
  endRow,
}: GetOrdersParams): Promise<FoodHistory[]> =>
  healthyApi
    .get('/foods', {
      params: { startRow, endRow },
    })
    .then((res) => res.data);

const foodService = {
  getFoodHistories,
};

export default foodService;
