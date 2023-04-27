import React, { useEffect } from 'react';
import { useFormWithValidation } from '../hooks/useForm';
import Modal from './Modal';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import TagsBar from './TagsBar';
import PriorityBar from './PriorityBar';

const EditTodoModal = ({
  isModalEditOpen,
  closeEditModal,
  onEdit,
  selectedTask,
  selectedTags,
  setSelectedTags,
  activeTags,
  setActiveTags,
  priority,
  setPriority,
}) => {
  const { values, setValues, handleChange, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const updatedTask = {
      id: selectedTask.id,
      title: values.title || selectedTask.title,
      description: values.description || selectedTask.description,
      completed: selectedTask.completed,
      category: selectedTags,
      priority: priority,
      createdAt: selectedTask.createdAt,
    };
    onEdit(updatedTask);
  }

  // При открытии попапа задаем значения в поля формы из вызванной Task. 
  // Отмечаем Tags поставленные пользователем.
  useEffect(() => {
    if (selectedTask) {
      setValues({
        title: selectedTask.title || '',
        description: selectedTask.description || '',
      });
      setSelectedTags(selectedTask.category || []);
      const activeTags = selectedTask.category.map((tag) => tag.id);
      setActiveTags(activeTags || []);
      setPriority(selectedTask.priority || '');
    }
  }, [isModalEditOpen]);

  return (
    <>
      {isModalEditOpen && (
        <Modal onCloseModal={closeEditModal}>
          <Form
          onSubmit={handleSubmit}
          onCloseModal={closeEditModal}
          submitButtonName={'Edit'}
          isValid={isValid}
          >
            <Input
              name={'title'}
              value={values.title}
              label={'Title'}
              placeholder={'Your title...'}
              onChange={handleChange}
            />
            <TextArea
              name={'description'}
              value={values.description}
              label={'Description'}
              placeholder={'Your description...'}
              onChange={handleChange}
            />
            <div className='flex justify-between mt-8'>
              <TagsBar
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                setActiveTags={setActiveTags}
                activeTags={activeTags}
              />
              <PriorityBar priority={priority} setPriority={setPriority} />
            </div>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default EditTodoModal;
