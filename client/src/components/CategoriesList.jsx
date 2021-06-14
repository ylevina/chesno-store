import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setCategories, selectCategories } from '../store/category.jsx';
import { FontSize } from '../variables.js';
import { LinkStyled } from './LinkStyled.jsx';
import { ListItemStyled } from './ListItemStyled.jsx';

const mapStateToProps = state => ({
    categories: selectCategories(state)
});

export const CategoriesList = connect(mapStateToProps, { setCategories })(
    ({ setCategories, categories }) => {

        useEffect(() => {
            setCategories();
        }, []);

        return (
            <ListStyled>
                {categories.map(element => (
                    <li key={element.id}>
                        <LinkStyled
                            to='/'
                            >{element.name}
                        </LinkStyled>
                        {/* color="gray" */}
                    </li>
                ))}
            </ListStyled>
        )
    });


const ListStyled = styled.ul`
    font-size: ${FontSize.XXS};
    list-style-type: none;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;

    li {
        width: 50%;
        margin: 0.5em 0;
    }   
`;