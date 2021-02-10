import React from 'react';
import styled from 'styled-components';
import { Input } from './Input';

export const InputPassword = ({ hasLabel, label }) => {
    return (
        <Input type="password" hasLabel={hasLabel} label={label} />
    );
}