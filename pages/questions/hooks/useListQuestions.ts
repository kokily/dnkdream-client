import { useRouter } from 'next/router';
import React, { useCallback, useReducer, useState } from 'react';
import useListScrollQuestions from './useListScrollQuestions';

type StateProps = {
  title: string;
  name: string;
  email: string;
};

type ActionProps = {
  name: string;
  value: string;
};

export type SelectType = 'title' | 'name' | 'email' | null;

const reducer = (state: StateProps, action: ActionProps) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

export default function useListQuestions() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, {
    title: '',
    name: '',
    email: '',
  });
  const { title, name, email } = state;
  const [confirm, setConfirm] = useState<boolean | null>(null);
  const [selected, setSelected] = useState<SelectType>(null);

  const { data, loading, error } = useListScrollQuestions();

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  }, []);

  const toggleConfirm = (value: boolean | null) => {
    setConfirm(value);
  };

  const onSelect = (value: SelectType) => {
    setSelected(value);
  };

  const onDetail = (id: string) => {
    router.push(`/questions/${id}`);
  };

  return {
    questions: data?.ListQuestions.questions || [],
    loading,
    error,
    title,
    name,
    email,
    confirm,
    selected,
    onChange,
    toggleConfirm,
    onSelect,
    onDetail,
  };
}
