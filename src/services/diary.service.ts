import { Diary, Exercise } from '@healthy-app/models/diary';
import { healthyApi } from '@healthy-app/utils/api';

export interface GetExercisesParams {
  startRow?: number;
  endRow?: number;
}

const getExercises = ({
  startRow,
  endRow,
}: GetExercisesParams): Promise<Exercise[]> =>
  healthyApi
    .get('/exercises', {
      params: { startRow, endRow },
    })
    .then((res) => res.data);

const getDiaries = ({
  startRow,
  endRow,
}: GetExercisesParams): Promise<Diary[]> =>
  healthyApi
    .get('/diaries', {
      params: { startRow, endRow },
    })
    .then((res) => res.data);

const diaryService = {
  getExercises,
  getDiaries,
};

export default diaryService;
