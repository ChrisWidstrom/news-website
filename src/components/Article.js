import React from "react";
import styled from "styled-components";

export const Article = ({source, description, title, content}) => {
    return (
        <>
            <h3>{source}</h3>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{content}</p>
        </>
    )
}