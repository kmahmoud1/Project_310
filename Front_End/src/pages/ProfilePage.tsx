import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonToolbar } from '@ionic/react';
import axios from 'axios';


import { arrowBackOutline, arrowForward, bookmarkOutline, chatboxEllipsesOutline, ellipsisHorizontal, imageOutline, personAddOutline } from "ionicons/icons";
import { send } from 'process';
import { useState } from 'react';
import { useHistory } from 'react-router';

const ProfilePage = () => {

  let history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  const Follow = () => {
    
        
                // redirect to home page
                history.push('/home')
                
      
        
}
	return (
		<IonPage >
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">

						<IonButton color="light">
							<IonIcon icon={ arrowBackOutline } />
						</IonButton>
					</IonButtons>

					<IonButtons slot="end">

						<IonButton color="light">
							<IonIcon icon={ ellipsisHorizontal } />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>

				<div ></div>

				<IonGrid>
					<IonRow className="ion-justify-content-center">
						<IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
							<IonCard >

								<IonCardContent>

									<IonRow>
										<IonCol size="4">
                      
											<img src="/assets/170px-Young_Mandela.jpg" alt="avatar" width = "130" />
                      <IonText color="dark" >
														<p>Khalid Mahmoud</p>
													</IonText>
													<IonText color="medium">
														<p>(He/Him)</p>
													</IonText>
										</IonCol>

										<IonCol size="10">
											<IonRow >
												<IonCol size="11">
													
												</IonCol>
											</IonRow>

											<IonRow >

												<IonCol >
													
													<IonCardTitle>109</IonCardTitle>
													<IonCardSubtitle>Following</IonCardSubtitle>
												</IonCol>

												<IonCol>
													
													<IonCardTitle>300</IonCardTitle>
													<IonCardSubtitle>Followers</IonCardSubtitle>
												</IonCol>
                        <IonCol>
                        
									<IonCardTitle>90</IonCardTitle>
									<IonCardSubtitle>Photos</IonCardSubtitle>
                  </IonCol>

						
											</IonRow>
										</IonCol>
									</IonRow>

									<IonRow>
										<IonCol size="6">
											<IonButton fill="outline" expand="block">
												Message
											</IonButton>
										</IonCol>

										<IonCol size="6">
											<IonButton color="primary" expand="block" onClick={Follow}>
												<IonIcon icon={ personAddOutline } size="small" />&nbsp;
												Follow
											</IonButton>
                      
										</IonCol>
									</IonRow>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

					<IonRow >
						<IonCol size="12">
							<IonCard >

								<IonCardHeader>
									<IonRow>
										<IonIcon icon={ chatboxEllipsesOutline } />
										<IonCardSubtitle>Status</IonCardSubtitle>
									</IonRow>
								</IonCardHeader>
								<IonCardContent>
									<IonText>
										<p>Broke my leg skiing today, safe to say my month is ruined..</p>
									</IonText>
          
								</IonCardContent>
                
							</IonCard>
              
						</IonCol>
					</IonRow>

					<IonRow>
						

	
					</IonRow>

					
				</IonGrid>
				
			</IonContent>
		</IonPage>
	);
};

export default ProfilePage;