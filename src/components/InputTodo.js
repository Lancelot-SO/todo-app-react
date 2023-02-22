import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';
import styles from '../styles/InputTodo.module.css';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  InputTodo.propTypes = {
    addTodoItem: PropTypes.func.isRequired,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
          className={styles.inputText}
        />
        <button type="button" className={styles.inputSubmit}>
          {' '}
          <FaPlusCircle />
        </button>
      </form>
      <span className={styles.submitWarning}>{message}</span>
    </>
  );
};
export default InputTodo;
