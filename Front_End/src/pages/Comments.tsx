import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonProgressBar,
  IonTextarea,
  IonTitle,
  IonToolbar,
  setupIonicReact,
  useIonActionSheet
} from '@ionic/react';
import {addOutline, camera, paperPlaneOutline,add} from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, {useState} from 'react';
import { useHistory } from 'react-router';

setupIonicReact({
  mode: 'ios',
});

// var beforeChange: number;
export default function Home() {


  
  // const [text, setData] = useState(window.innerWidth);//not error just 0 makes it disapear
  // function handleResize(){
  //   if(window.innerWidth/window.innerHeight > 10/16)
  //   {
  //     var tmp:number = text;
  //     tmp = window.innerHeight*9/16;
  //     console.log("tmp",tmp)
  //     setData(tmp)
  //   }
  // }
  var file: File; //https://stackoverflow.com/questions/51722363/create-file-object-type-in-typescript
  const [isOpen, setIsOpen] = useState(false);
  // handleResize();
  // window.addEventListener('resize', handleResize); //not posible for loop
  const [present] = useIonActionSheet();
  // const [result, setResult] = useState<OverlayEventDetail>();

  function onFileChanged(event: React.ChangeEvent<HTMLInputElement>) {
    file = event.target.files![0];
    const url = URL.createObjectURL(file);
    console.log(url);
    document.getElementById("UploadBtn")!.innerHTML = `<img src=${url} />`
  }

  

  let history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [comm, setComm] = useState('');
  function send() {
    history.push('/comment');
    
    const commm = (document.getElementById("typeHere")as HTMLInputElement).value;
    setComm(commm);

    
  
    

    
    // https://betterprogramming.pub/a-complete-guide-of-file-uploading-in-javascript-2c29c61336f5
    let formData = new FormData();
    formData.set('file', file!);

    //https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects

    formData.append("file", file);
    formData.append("description",(document.getElementById("description") as HTMLInputElement).value);
    const request = new XMLHttpRequest();


    request.addEventListener("readystatechange", () => {
      console.log(request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        alert(`The happiness score is ${Math.round(JSON.parse(request.responseText).score*1000)/10}`)
      } else if (request.readyState === 4) {
        console.log("could not fetch the data");
      }
    });

    request.send(formData);

  }
  return (
    <IonPage style={{
      width: Math.min(window.innerHeight * 9 / 16, window.innerWidth), position: 'absolute', left: '50%',
      transform: 'translate(-50%, 0)'
    }}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Comments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Comments
            
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* {mywidth} */}
        <ExploreContainer />
        <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton routerDirection="forward">
            <IonIcon icon={add}  onClick={() => setIsOpen(true)}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonContent><IonList>
  <IonItem>
    <IonAvatar item-start>
      <img src="/assets/170px-Young_Mandela.jpg"/ >
    </IonAvatar>
         Khalid: {comm}
  </IonItem>
</IonList>
                  </IonContent>

        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start" >
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
              <IonTitle>Leave a Comment</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            <form>
              <IonList>
                {/*
                <IonItem>
                  <IonInput placeholder="Title" id="title"></IonInput>
                </IonItem> */}

                <IonItem>
                  <IonTextarea autoGrow={true} spellcheck={true} placeholder="Type here" id="typeHere"></IonTextarea>
                </IonItem>

                <input type="file" accept="image/*" style={{ display: "none" }} id="fileInputC" capture name="Camera" onChange={onFileChanged}></input>
                <input type="file" accept="image/*" style={{ display: "none" }} id="fileInputG" name="Gallery" onChange={onFileChanged}></input>
                {/* style="display:none;" id=fileInputC capture="camera" #fileInputC name="Camera" (change)="onFileChanged($event)"> */}
                {/* <input type="file" accept="image/*"></input> */}
                {/* </input> style="display:none;" id=fileInputG name="Gallery" (change)="onFileChanged($event)"> */}
                <section>
                  
                  <br />
                  <IonButton color="success" expand="block" id="send" onClick={send}>
                    {/* (click)="sendout();" */}
                    <IonIcon icon={paperPlaneOutline}></IonIcon>
                    Comment
                  </IonButton>
                  <IonProgressBar type="indeterminate" style={{ visibility: "hidden" }} id="loading"></IonProgressBar>
                </section>

              </IonList>
            </form>
          </IonContent>
        </IonModal>
        


      </IonContent >
    </IonPage >

  );

};


