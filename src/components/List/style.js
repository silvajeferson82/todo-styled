import styled from 'styled-components';

export const ListContainer = styled.div`
    padding: 8px;
    width: calc(100% - 16px);
    font-family: 'Lato', sans-serif;
`;

export const Li = styled.li`
    background-color: #fafafa;
    border: 1px solid #21212121;
    border-radius: 4px;
    padding: 6px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: #dc3545;
    color: #fafafa; 
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;
