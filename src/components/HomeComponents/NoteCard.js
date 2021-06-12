import React ,{memo}from 'react'
import styled from 'styled-components'
import moment from "moment"
import{colors,mediaQuery,basicUnits} from "../../utils/variables"
const NoteCard = ({note}) => {
   
    const date = moment(note.created).format('YYYY MM DD')

    function truncate(input) {
       if (input.length > 5) {
          return input.substring(0, 50) + '...';
       }
       return input;
    };


    return (
        <CardContainer>
            <DateContainer>
              <p>{moment(note.created).format('Do')}</p>
              <p>{moment(note.created).format('MMM')}</p>
              <p>{moment(note.created).format('YYYY')}</p>
            </DateContainer>
            <ContentContainer>
                <p>Title:</p>
                <Contents>{note.title}</Contents>
            </ContentContainer>
            <ContentContainer>
                <p>Dteails:</p>
                <Contents>{truncate(note.details)}</Contents>
            </ContentContainer>
            
        </CardContainer>
    )
}


const CardContainer = styled.div`
margin-top: 2rem;
background-color: white;
color:${colors.secondary};
padding:4rem 3rem;
position: relative;

`
const Contents = styled.p`
font-size: ${basicUnits.fontSize}px;
font-weight: normal;

`
const ContentContainer = styled.div`
padding-bottom: 1rem;
font-size: ${basicUnits.fontSize*1.3}px;
font-weight: bold;
word-wrap:break-word;

`
const DateContainer = styled.div`
position: absolute;
top:0;
right: 0;
width:5rem;
height: 5rem;
background-color: ${colors.primary};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:.3rem;

font-weight: Bold;
font-size: ${basicUnits.fontSize*1.2}px;
`

export default memo(NoteCard)
