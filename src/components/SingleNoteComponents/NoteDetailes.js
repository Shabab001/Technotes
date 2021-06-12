import React,{useEffect,useState,memo} from 'react'
import * as noteActions from "../../redux/actions/noteActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import{colors,mediaQuery,basicUnits} from "../../utils/variables"
import styled from 'styled-components';
import { Modal, Button } from 'antd';
import moment from "moment"
import EditModal from '../modals/EditModal';
import DeleteModal from '../modals/deleteModal';

const NoteDetailes = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDelModalVisible, setIsDelModalVisible] = useState(false);
    console.log(props.id)
    const showModal = (string) => {
        if(string==="edit"){

            setIsModalVisible(true);
        }
        if(string==="del"){
            setIsDelModalVisible(true);
        }
      };
      const handleDelete=async()=>{
          const del= await props.actions.deleteNote(props.id,props.history);
          if(del){
            props.actions.getAllNotes()
            setIsDelModalVisible(false);
          }
      }

    const handleOk = async(title,details) => {
        let data={
            title,
            details
        }
        const update = await props.actions.editNote(props.id,data);
        if(update){
            props.actions.getAllNotes()
            setIsModalVisible(false);
        }
      
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
        setIsDelModalVisible(false);
      };

   
    useEffect(()=>{
       props.actions.getNoteDetails(props.id)
    },[])

    return (
        <>
           {props.auth.user && props.singleNote?
        <DetailsContainer>  
            
                 <HeadingText>Note Details</HeadingText>
                  <DetailsGrid>
                 <FirsConatainer>
                 <TextConatainer>
                     <FirsText>Title</FirsText>
                     <SecondText>{props.singleNote.title}</SecondText>
                 </TextConatainer>
                 <TextConatainer>
                     <FirsText>Posted at</FirsText>
                     <SecondText>{moment(props.singleNote.created).format("dddd, MMMM Do YYYY, h:mm:ss a")}</SecondText>
                 </TextConatainer>
                 <TextConatainer>
                     <FirsText>Posted By</FirsText>
                     <SecondText>{props.auth.user.mail}</SecondText>
                 </TextConatainer>
                 </FirsConatainer>
             <SecondConatainer>
                 <FirsText>Details</FirsText>
                 <SecondText2>{props.singleNote.details}</SecondText2>
             </SecondConatainer>
             </DetailsGrid>
             <ThirdConatainer>
                 <EditBtn  onClick={()=>showModal("edit")}>
                     <p>Edit Note</p>
                 </EditBtn>
                 <EditBtn btn={"delete"} onClick={()=>showModal("del")}>
                     <p>Delete Note</p>
                 </EditBtn>
             </ThirdConatainer>
        </DetailsContainer>:
        null
                        }
              <EditModal isModalVisible={isModalVisible} handleCancel={handleCancel} handleOk={handleOk}/>
              <DeleteModal isModalVisible={isDelModalVisible} handleCancel={handleCancel} deleteOk={handleDelete}/>
        </>
    )
}


const DetailsContainer= styled.div`

width:100%;
max-width: ${basicUnits.maxWidth}px;
margin: auto;
text-align: center;
padding-top: 2rem;

font-size: ${basicUnits.fontSize*3};
font-weight: bold;




`
const HeadingText= styled.p`
   font-size: ${basicUnits.fontSize*3}px;
font-weight: bold;
    color:${colors.third};
    padding-bottom:2rem;
`;


const FirsConatainer= styled.div`
background-color: ${colors.secondary};
padding:2rem;
color:white;
text-align: center;



`
const DetailsGrid= styled.div`
display: grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr)) ;



`
const TextConatainer= styled.div`
padding-bottom: 2rem;



`
const FirsText=styled.p`
color:white;
font-size: ${basicUnits.fontSize*2.5}px;
word-wrap:break-word;
font-weight: bold;

`
const SecondText=styled.p`
color:${colors.primary};
font-size: ${basicUnits.fontSize*1.5}px;
word-wrap:break-word;
padding-top: 1rem;

`
const SecondText2=styled.p`
color:${colors.secondary};
font-size: ${basicUnits.fontSize*1.5}px;
padding-top: 1rem;
word-wrap:break-word;
width: 100%;


`


const SecondConatainer= styled.div`
background-color: ${colors.primary};
padding:2rem;
color:white;
text-align: center;

`

const ThirdConatainer= styled.div`

padding:3rem;
display: flex;
justify-content: center;
align-items: center;
gap:3rem;
flex-wrap: wrap;

`

const EditBtn= styled.div`

height: 4rem;
width: 16rem;
display: flex;
justify-content: center;
align-items: center;
background-color:${({btn})=> btn==="delete"? `${colors.secondary}`:`${colors.primary}` } ;
color:${({btn})=> btn==="delete"? `${colors.primary}`:`${colors.secondary}` } ;
font-size: ${basicUnits.fontSize*1.5}px;
cursor: pointer;
`


function mapStateToProps(state, ownProps) {
    return {
      auth: state.auth,
      note:state.note,
      singleNote:state.note.singleNote
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(noteActions, dispatch),
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(memo(NoteDetailes));
