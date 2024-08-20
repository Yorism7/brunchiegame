import {
    IonContent,
    IonInput,
    IonPage,
    IonButton,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
  } from '@ionic/react';
  import React, { useState } from 'react';
  import { useHistory } from 'react-router-dom';
  import Swal from 'sweetalert';
  import './Login.css';
  
  const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const history = useHistory();
  
    const handleLogin = () => {
      const correctEmail = 'admin';
      const correctPassword = 'admin';
  
      if (email === correctEmail && password === correctPassword) {
        Swal({
          title: 'เข้าสู่ระบบสำเร็จ',
          text: 'คุณเข้าสู่ระบบเรียบร้อยแล้ว!',
          icon: 'success',
          button: 'ตกลง',
        }).then(() => {
          history.push('/home');
        });
      } else {
        Swal({
          title: 'เข้าสู่ระบบล้มเหลว',
          text: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง!',
          icon: 'error',
          button: 'ลองอีกครั้ง',
        });
      }
    
    };
  
    return (
      <IonPage>
        <IonContent color={'main'}>
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <IonImg src="/icon/KJKJ_LOGO.png"></IonImg>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonInput
                className="form_login"
                placeholder="Email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
                autocomplete="off"
              ></IonInput>
            </IonRow>
            <IonRow className="ion-padding-top">
              <IonInput
                type="password"
                className="form_login"
                placeholder="Password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
                autocomplete="off"
              ></IonInput>
            </IonRow>
            <IonRow className="ion-padding-top">
              <IonCol>
                <IonText className="ion-float-left">
                  <input type="checkbox" value={'save'} name="rememberMe" />
                  <label> Remember me</label>
                </IonText>
              </IonCol>
              <IonCol>
                <IonText className="ion-float-right">Forget Password?</IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  className="form_submit"
                  expand="block"
                  color={'submit'}
                  onClick={handleLogin}
                >
                  SIGN IN
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonButton
                  expand="block"
                  color="light"
                  shape="round"
                  fill="outline"
                  routerLink="/gamesetup"
                >
                  <b>guest</b>
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="sub_login">
                <IonImg className="sub_login" src="/icon/line.png"></IonImg>
                <IonImg className="sub_login" src="/icon/facebook.png"></IonImg>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonImg className="footer" src="/icon/logo_footer.png"></IonImg>
              </IonCol>
            </IonRow>
            <IonRow className="ion-padding-top">
              <IonCol>
                <div className="forgotpass">
                  Don’t have an account? <a href="?">Register</a>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;
  