import { IonContent, IonInput, IonItem, IonPage, IonTitle, IonButton, IonText, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import React from 'react';
import './Login.css'

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonContent color={'main'} className="ion-padding">
                <IonGrid>
                    <IonRow class='ion-justify-content-center'>
                        <IonCol size='12'>
                            <IonImg src='public\icon\KJKJ_LOGO.png'></IonImg>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                    <IonInput
                        className='form_login'
                        placeholder="Email"
                    ></IonInput>
                    </IonRow>
                    <IonRow className='ion-padding-top'>
                    <IonInput
                        className='form_login'
                        placeholder="Password"
                    ></IonInput>
                    </IonRow>
                    <IonRow className='ion-padding-top'>
                        <IonCol>
                            <IonText className='ion-float-left'>
                            <input type="checkbox" value={'save'} name="horns" />
                            <label>   Remember me</label>
                            </IonText>
                        </IonCol>
                        <IonCol>
                            <IonText className='ion-float-right'>forget Password?</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton className='form_sunmit' expand='block' color={'submit'} routerLink='/home'>SIGN IN</IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className='sub_login'>
                            <IonImg className='sub_login' src='public\icon\line.png'></IonImg>
                            <IonImg className='sub_login' src='public\icon\facebook.png'></IonImg>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='12'>
                            <IonImg className='footer' src='public\icon\logo_footer.png'></IonImg>
                        </IonCol>
                    </IonRow>
                    <IonRow className='ion-padding-top'>
                        <IonCol>
                            <div className='forgotpass'>Don’t have an account ? <a href="?">Register</a></div>
                        </IonCol>
                    </IonRow>

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Login;