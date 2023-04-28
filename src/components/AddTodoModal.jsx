import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormWithValidation } from '../hooks/useForm';
import Modal from './Modal';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import TagsBar from './TagsBar';
import PriorityBar from './PriorityBar';



const AddTodoModal = ({
  closeAddModal,
  isModalAddOpen,
  onAddClick,
  selectedTags,
  setSelectedTags,
  priority,
  setPriority,
}) => {
  const { values, handleChange, resetForm, isValid } = useFormWithValidation();

  // При открытии попапа сбрасываем состояние тегов и приоритет задачи
  useEffect(() => {
    setSelectedTags([]);
    setPriority('low');
    resetForm();
  }, [isModalAddOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: values.title,
      description: values.description,
      completed: false,
      category: selectedTags,
      priority: priority,
      createdAt: new Date(),
      owner: 'John Doe'
    };
    onAddClick(newTask);
    resetForm();
  }

  return (
    <>
      {isModalAddOpen && (
        <Modal onCloseModal={closeAddModal}>
          <Form
            onSubmit={handleSubmit}
            onCloseModal={closeAddModal}
            submitButtonName={'Add'}
            isValid={isValid}
            isDisabled={!isValid}
          >
            <Input
              name={'title'}
              value={values.title || ''}
              label={'Title'}
              placeholder={'Your title...'}
              onChange={handleChange}
            />
            <TextArea
              name={'description'}
              value={values.description || ''}
              label={'Description'}
              placeholder={'Your description...'}
              onChange={handleChange}
            />
            <div className='flex justify-between mt-8'>
              <TagsBar
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
              <PriorityBar priority={priority} setPriority={setPriority} />
            </div>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default AddTodoModal;
