export interface FoodHistory {
  id: string;
  imageUrl: string;
  foodType: 'Morning' | 'Lunch' | 'Dinner' | 'Snack';
  createdAt: string;
}
