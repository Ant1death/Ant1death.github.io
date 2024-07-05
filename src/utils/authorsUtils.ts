import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthors } from '../redux/authorsSlice';

export const useFindAuthorById = () => {
  const { data: authors } = useSelector(selectAuthors);

  const findAuthorById = useMemo(() => {
    return (id: number) => authors?.find(author => author.id === id);
  }, [authors]);

  return findAuthorById;
};
