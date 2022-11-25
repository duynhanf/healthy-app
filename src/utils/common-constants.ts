import { ICONS } from '@healthy-app/components/atoms/Icon';
import NotificationIcon from '@healthy-app/components/molecules/NotificationIcon';
import i18n from '@healthy-app/locales/i18n';

export const LINKS = [
  {
    label: 'Morning',
  },
  {
    label: 'Lunch',
  },
  {
    label: 'Dinner',
  },
  {
    label: 'Snack',
  },
];

export const RECOMMENDEDCOLUMNS = [
  {
    title: 'RECOMMENDED COLUMN',
    description: 'オススメ',
  },
  {
    title: 'RECOMMENDED DIET',
    description: 'ダイエット',
  },
  {
    title: 'RECOMMENDED BEAUTY',
    description: '美容',
  },
  {
    title: 'RECOMMENDED HEALTH',
    description: '健康',
  },
];

export const MENUS = [
  {
    icon: ICONS.Memo,
    label: i18n.t('menu.my_record'),
    url: '/my-record',
  },
  {
    icon: ICONS.Challenge,
    label: i18n.t('menu.challenge'),
    url: '/columns',
  },
  {
    icon: NotificationIcon,
    label: i18n.t('menu.notification'),
    url: '/notifications',
    notificationCount: 1,
  },
];
