import React,{memo,useEffect,useState} from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as noteActions from "../../redux/actions/noteActions";
import styled from 'styled-components';
import{colors,mediaQuery,basicUnits} from "../../utils/variables"
import Item from 'antd/lib/list/Item';
import NoteCard from './NoteCard';
import {Link} from "react-router-dom"
import {BsPlusCircle} from "react-icons/bs"
import EditModal from '../modals/EditModal';

const Main = (props) => {
const [notes,setNotes]=useState([])
const [isModalVisible, setIsModalVisible] = useState(false);

const showModal = () => {
  setIsModalVisible(true);
};

const handleOk = async(title,details) => {
  let data={
      title,
      details
  }
  const update = await props.actions.addNote(data);
  if(update){
      props.actions.getAllNotes()
      setIsModalVisible(false);
  }

};

const handleCancel = () => {
  setIsModalVisible(false);
};




   useEffect(()=>{

          
    
       if(localStorage.auth_token){
           
        props.actions.getAllNotes()
       }
   },[localStorage.auth_token])

    useEffect(()=>{
        if(props.note && props.note.notes){
            setNotes([...props.note.notes])
        }

    },[props.note,localStorage.auth_token])
    console.log(notes)

    return (
      <>
      {localStorage.user_mail?
        <MainContainer>
           <Headings>
               <Welcome>Welcome {props.auth.user.mail}</Welcome>
             
           </Headings>
           <AllNotesSec>
               <HeadingGrid>

               <AllNotesHeadings>All Notes</AllNotesHeadings>
               <AddNoteGrid style={{fontSize:"1.5rem",color:`${colors.third}`,cursor:"pointer"}} onClick={showModal} >
                 <BsPlusCircle/>
                <AllNotesHeadings>Add Note</AllNotesHeadings>
               </AddNoteGrid>
               </HeadingGrid>
               <CardGrid >
               {notes && notes.map((note,index)=>{
                   return(
                     <Link key={index} to={`/note/${note.id}`}>
                       <NoteCard  note={note}/>
                       </Link>
                       )
                    }) }
                    </CardGrid>
           </AllNotesSec>
           <div>

           </div>
           <div>
               <p>Your Notes</p>
           </div>
           <EditModal isModalVisible={isModalVisible} handleCancel={handleCancel} handleOk={handleOk}/>
        </MainContainer>:
        <p>Please Authenticate to see notes</p>
        }
        </>
    )
}


const MainContainer= styled.div`
width: 100%;
max-width: ${basicUnits.maxWidth}px;
margin: auto;
background-color: aliceblue;
height: auto;
background-color: ${colors.secondary};

`;

const Headings =styled.div`
padding-top: 3rem;
width: 100%;
max-width: ${basicUnits.maxWidth-700}px;
margin: auto;
text-align: center;

`
const Welcome= styled.p`
font-size: ${basicUnits.fontSize*1.5}px;
color:${colors.secondary};

`;

const AllNotesSec =styled.div`
width: 100%;
max-width: ${basicUnits.maxWidth-100}px;
padding: 1rem 1rem;
margin: auto;

color:white;

`
const AllNotesHeadings= styled.p`
font-size: ${basicUnits.fontSize*1.5}px;


`;

const CardGrid =styled.div`
display: grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr)) ;
gap:1rem;


`
const AddNoteGrid =styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:.5rem;


`
const HeadingGrid =styled.div`
display: flex;
align-items: center;
justify-content: space-between;


`




function mapStateToProps(state, ownProps) {
    return {
      auth: state.auth,
      note:state.note
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(noteActions, dispatch),
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(memo(Main));
