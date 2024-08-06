export interface SubjectType {
  subject_id?: number;
  subject_nm?: string;
  subject_type?: string;
  question_count?: number;
  test_minutes?: number;
  file_id?: number;
  file_nm?: string;
  file_size?: string;
  is_used?: boolean;
}

export interface CategoryType {
  category_id: string;
  subject_id: number;
  category_nm: string;
  parent_category_id?: string;
  question_count: number;
  order_by: number;
  is_used: boolean;
  children?: Array<CategoryType>;
  isCreate?: boolean;
  isUpdate?: boolean;
}

export interface QuestionType {
  category_id?: string;
  category_nm?: string;
  choices?: any;
  comment?: string;
  content?: string;
  created_at?: string;
  created_by?: string;
  current_choice_group_id?: number;
  document_link?: string;
  elements_to_create?: string;
  function_id?: number;
  function_nm?: string;
  insert_type?: string;
  is_used?: boolean;
  is_user_used?: boolean;
  media?: any;
  order_by?: number;
  parent_category_id?: string;
  parent_category_nm?: string;
  question_id: number;
  subject_id?: number;
  subject_nm?: string;
  updated_at?: string;
  updated_by?: string;
  video_link?: string;
  working_view?: string;
}

export interface TestType {
  test_id?: number;
  test_nm?: string;
  test_type?: string;
  test_type_nm?: string;
  subject_name?: string;
  subject_id?: number;
  crnt_participants?: number;
  max_participants?: number;
  test_datetime?: string;
  registration_start?: string;
  registration_end?: string;
  result_open_on?: string;
  is_used?: boolean;
  is_result_open?: boolean;
  is_opened?: boolean;
  is_generated_question?: boolean;
  created_at?: string;
  created_by?: string;
  updated_at?: string;
  updated_by?: string;
}

export interface PrsnlTestType {
  test_id?: number;
  subject_id?: number;
  subject_nm?: string;
  test_nm?: string;
  test_datetime?: string;
  subject_type?: string;
  is_reassignment?: boolean;
  file_ids?: string;
  file_nms?: string;
  score?: number;
  grade?: string;
}

export interface PrsnlQuestionType {
  question_id?: number;
  function_id?: number;
  question_item_id?: number;
  category_nm?: string;
  function_nm?: string;
  video_link?: string;
  document_link?: string;
  content?: string;
  is_correct?: boolean;
  choice_content?: string;
  correct_choice_content?: string;
  parent_category_nm?: string;
  working_view?: string;
  elements_to_create?: string;
  comment?: string;
  element_count?: number;
  result_count?: number;
}

export interface PrtcQuestionElement {
  question_grading_id?: number;
  question_id?: number;
  result_count?: number;
  grading_type?: string;
  grading_name?: string;
  element_count?: number;
  existing_elements_count?: number;
  comment?: string;
}

export interface QuestionTableColumnType {
  category_id: string;
  category_nm: string;
  choices?: any;
  comment?: string;
  content: string;
  created_at: string;
  created_by: string;
  current_choice_group_id?: number;
  document_link?: string;
  elements_to_create?: string;
  function_id?: number;
  function_nm?: string;
  insert_type?: string;
  is_used: boolean;
  is_user_used?: boolean;
  media: any;
  order_by?: number;
  parent_category_id: string;
  parent_category_nm: string;
  question_id: number;
  subject_id: number;
  subject_nm?: string;
  updated_at?: string;
  updated_by?: string;
  video_link?: string;
  working_view?: string;
}

export interface CategoryDataType {
  key: number;
  category: number | null;
  all?: number;
  bim?: number;
  name: string;
}

export interface CountStoreType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export interface CategoryStateType {
  data: Array;
  removeData: (key) => void;
  insertData: (data) => void;
  updateData: (data) => void;
}

export interface MenuStateType {
  data: any;
  isLoading: boolean;
  error: any;
  fetchData: () => void;
}
