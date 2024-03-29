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

interface NoticeType {
  id: string;
  title: string;
  body: string;
  thumbnail?: string;
  tags: string[];
  created_at: Date;
  updated_at?: Date;
}

interface QuestionType {
  id: string;
  title: string;
  body: string;
  name: string;
  email: string;
  phone?: string;
  isConfirm: boolean;
  created_at: Date;
  updated_at?: Date;
}
