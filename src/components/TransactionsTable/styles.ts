import styled from 'styled-components'

export const Container = styled.div`

    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;


        th{
            color: var(--text);
            font-weight: 400;
            text-align: left;
            padding: 1rem 2rem;
            font-weight: 500;
            line-height: 1.5rem;
        }

        td{
            background: var(--main-shape);
            border: 0;
            padding: 1rem 2rem;
            border-radius: 0%.25rem;
            color: var(--text);

            &:first-child{
                color: var(--title);
            }
            &.deposit{
                color: var(--green);
            }
            &.withdraw{
                color: var(--red);
            }
        }
    }

`