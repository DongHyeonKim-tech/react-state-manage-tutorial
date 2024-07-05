import React from "react";
import { v4 as uuidv4 } from "uuid";
import type { NotificationPlacement } from "antd/es/notification/interface";
import { notification } from "antd";

export const getSubmitRemainingSeconds = (targetTime: string): number => {
  const currentTime = new Date();
  const targetDateTime = new Date(targetTime);
  const timeDifferenceInSeconds =
    300 - Math.floor((currentTime.getTime() - targetDateTime.getTime()) / 1000);

  return timeDifferenceInSeconds;
};

export const getEvalRemainingSeconds = (
  targetTime: string,
  testTimeSecond: number
): number => {
  const currentTime = new Date();
  const targetDateTime = new Date(targetTime);
  const timeDifferenceInSeconds =
    testTimeSecond -
    Math.floor((currentTime.getTime() - targetDateTime.getTime()) / 1000) -
    1;

  return timeDifferenceInSeconds;
};

interface Category {
  category_id: string;
  subject_id: number;
  category_nm: string;
  parent_category_id: string | null;
  question_count: number;
  order_by: number;
  is_used: boolean;
  children?: Category[]; // 하위 계층을 담을 배열
}

export const categoryHierarchy = (categories: any) => {
  // 상위 계층과 하위 계층을 분리하여 객체에 추가
  const hierarchy: Category[] = [];
  const map: { [key: string]: Category } = {}; // category_id를 key로 사용하여 빠른 조회를 위한 객체

  categories.forEach((category: any) => {
    // 카테고리 객체 생성
    let newCategory: Category = { ...category, children: [] };

    // 카테고리 객체를 map에 추가
    map[newCategory.category_id] = newCategory;

    // 상위 계층인 경우 hierarchy에 추가
    if (
      !newCategory.parent_category_id ||
      !map[newCategory.parent_category_id]
    ) {
      hierarchy.push(newCategory);
    } else {
      // 하위 계층인 경우 부모 카테고리의 children 배열에 추가
      delete newCategory.children;
      map[newCategory.parent_category_id].children!.push(newCategory);
    }
  });
  return hierarchy;
};

export const getArraySum = (arr: Array<number>) => {
  const result = arr.reduce((sum, currValue) => {
    return sum + currValue;
  });
  return result;
};

export const removeDuplicates = (objects: any[], key: string) => {
  // 중복을 제거하기 위한 맵 생성
  const map = new Map<any, any>();

  // 입력 배열을 반복하여 중복 제거
  for (const obj of objects) {
    // 객체의 id를 키로 사용하여 맵 저장
    map.set(obj[key], obj);
  }

  // 중복이 제거된 객체들을 포함하는 배열 반환
  return Array.from(map.values());
};

// second를 제외한 시간 표시
export const formatDateTime = (datetime: any) => {
  return datetime.replace("T", " ").slice(0, -3);
};

// year, month, date, second를 제외한 시간 표시
export const formatTime = (datetime: any) => {
  return datetime.split("T")[1].slice(0, 5);
};

// Array of objects 데이터의 특정 key의 value sum
export const getSumOfArrayObject = (dataSource: any[], key: string) => {
  return dataSource.reduce((sum, item) => sum + item[key], 0);
};

export const fnGenerateFileGuid = () => {
  const fileGuid = uuidv4();
  return fileGuid;
};

type NotificationType = "success" | "info" | "warning" | "error";
export const openNotification = (
  type: NotificationType = "info",
  message: string,
  description?: string,
  placement: NotificationPlacement = "bottomRight"
) => {
  //   const [api] = notification.useNotification();

  //   return api.info({
  return notification[type]({
    message: message,
    description: description,
    placement: placement,
  });
};
