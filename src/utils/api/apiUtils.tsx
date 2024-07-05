import { iisClient, djangoClient } from "./client";

/**
 * 결과 조회를 위한 인증키 받아오기
 * @param subjectId
 * @param testId
 * @param empNo
 * @param resultType
 * @returns 인증키 (유효기간 10분)
 */
export const GetVerificationkey = async (
  subjectId: number,
  testId: number,
  empNo: string,
  resultType: any
) => {
  let url = `/verificationKey`;
  return iisClient.post(url, null, {
    params: {
      subjectId: subjectId,
      testId: testId,
      empNo: empNo,
      resultType: resultType,
    },
  });
};

/**
 * 문제 목록 조회
 * @returns 문제 목록
 */
export const getAdminQuestionList = (subjectId: number) => {
  let url = `/questions`;
  return iisClient.get(url, {
    params: {
      subjectId: subjectId,
    },
  });
};

/**
 * 문제 목록 insert or update
 * @returns
 */
export const upsertAdminQuestion = (empNo: string, formData: any) => {
  let url = `/questions`;
  return iisClient.post(url, formData, {
    params: {
      empNo: empNo,
    },
  });
};

/**
 * 문제 선택 항목 조회
 * @returns 문제 선택 항목
 */
export const getAdminQuestionChoices = (questionId: number) => {
  let url = `/questions/${questionId}/choices`;
  return iisClient.get(url);
};

/**
 * 문제 선택 항목 insert or update
 * @returns
 */
export const upsertAdminQuestionChoices = (
  questionId: number,
  empNo: string,
  formData: any
) => {
  let url = `/questions/${questionId}/choices`;
  return iisClient.post(url, formData, {
    params: {
      questionId: questionId,
      empNo: empNo,
    },
  });
};

/**
 * 문제 이미지 조회
 * @returns 문제 이미지
 */
export const getAdminQuestionImages = (questionId: number) => {
  let url = `/questions/${questionId}/images`;
  return iisClient.get(url);
};

/**
 * 문제 이미지 파일 추가
 * @returns
 */
export const insertAdminQuestionImage = (empNo: string, formData: any) => {
  let url = `/images`;
  return iisClient.post(url, formData, {
    params: {
      empNo: empNo,
    },
  });
};

/**
 * 문제 이미지 insert or update
 * @returns
 */
export const upsertAdminQuestionImages = (
  questionId: number,
  empNo: string,
  formData: any
) => {
  let url = `/questions/${questionId}/images`;
  return iisClient.post(url, formData, {
    params: {
      questionId: questionId,
      empNo: empNo,
    },
  });
};

/**
 * 관련 기술 목록 조회
 * @returns 관련 기술 목록
 */
export const getAdminRelatedFunctionList = () => {
  let url = `/related-function`;
  return iisClient.get(url);
};

/**
 * 관련 기술 목록 수정
 * @returns 관련 기술
 */
export const updateAdminRelatedFunctionList = (
  empNo: string,
  formData: any
) => {
  let url = `/related-function`;
  return iisClient.post(url, formData, {
    params: {
      empNo: empNo,
    },
  });
};

/**
 * 카테고리(category) 특정 목록 조회
 * @returns 과목 목록
 */
export const getAdminSubjectCategoryList = (
  subjectId: number,
  parentCategoryId: string | null
) => {
  let url = `/subject/category`;
  return iisClient.get(url, {
    params: {
      subjectId: subjectId,
      parentCategoryId: parentCategoryId,
    },
  });
};

export const getMenuList = () => {
  let url = `/bim-mng/menu-list`;
  return djangoClient.get(url, {});
};
