import { useForm } from 'react-hook-form'
import styles from './DynamicForm.module.css'

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('Form data:', data)
  }

  const firstFieldValue = watch('firstField', '')

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label className={styles.label}>First Field</label>
      <input
        {...register('firstField', { required: true, minLength: 6 })}
        className={styles.input}
      />
      {errors.firstField && (
        <p className={styles.error}>Must be at least 6 characters</p>
      )}

      {firstFieldValue.length >= 6 && (
        <>
          <label className={styles.label}>Second Field</label>
          <input
            {...register('secondField', { required: true })}
            className={styles.input}
          />
          {errors.secondField && (
            <p className={styles.error}>This field is required</p>
          )}
        </>
      )}

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  )
}

export default DynamicForm
