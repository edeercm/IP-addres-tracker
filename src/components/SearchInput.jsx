import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components'
import arrow from '../assets/images/icon-arrow.svg'

const Input = styled.input`
  width: 25rem;
  height: 3rem;
  border-radius: 0.625rem 0 0 0.625rem;

  &:focus-visible {
    outline: none;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0 0.625rem 0.625rem 0;
  background-color: #000000;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

const Arrow = styled.img`
  width: auto;
`

const SearchInput = () => {

  const { handleSubmit, register, formState: { errors, isDirty, isValid }, reset, trigger } = useForm();

  const handleBlur = async () => {
    await trigger();
  };

  const onSubmit = () => {
    if (isValid) {
      reset();
    }
  };
  
  return <>
  <form className='d-flex flex-row' onSubmit={handleSubmit(onSubmit)}>
      <div className='d-flex flex-column gap-1'>
        <Input
          type="text"
          name='ipaddres'
          id='ipaddres'
          placeholder='Search for any IP addres or domain'
          {...register("text", { required: true })}
          onBlur={() => handleBlur("text")}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
         {errors.email && <div className="invalid-feedback">Please enter a valid IP address or domain</div>}
      </div>
      <SubmitBtn
        type="submit"
        disabled={!isDirty || !isValid}
      >
        <Arrow src={arrow} alt="arrow" />
      </SubmitBtn>
    </form>
  </>
}

export default SearchInput