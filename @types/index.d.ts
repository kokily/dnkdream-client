interface ItemType {
  id: number;
  subTitle: string;
  subUrl: string;
}

interface MenuType {
  id: number;
  title: string;
  url: string;
  items?: ItemType[];
}
