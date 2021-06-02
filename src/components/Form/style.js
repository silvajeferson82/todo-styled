import styled from 'styled-components';

export const FormContainer = styled.form`
    padding: 6px;
    width: 100%;
    
`;

export const Input = styled.input`
    padding: 8px;
    width: calc(80% - 16px);
    border-radius: 4px;
    border: 1px solid #4696e5;
    margin-right: 8px;
    font-family: 'Lato', sans-serif;
`;

export const Button = styled.button`
    padding: 8px;
    width: calc(20% - 16px - 8px);
    background-color: #4695e5;
    color: #fafafa;
    border-radius: 4px;
    border: none;
    margin-right: 12px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
`;