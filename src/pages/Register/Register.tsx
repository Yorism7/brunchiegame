import React, { useState } from 'react';
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
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert';
import axios from 'axios';
import './Register.css'; // Add your custom styles here

const Register: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>(''); // Changed from email to username
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>(''); // New state for confirm password
  const history = useHistory();

  const handleRegister = async () => {
    

    try {
        // Check if passwords match
        if (password !== confirmPassword) {
            Swal({
                title: 'รหัสผ่านไม่ตรงกัน',
                text: 'กรุณาตรวจสอบว่ารหัสผ่านของคุณตรงกัน',
                icon: 'error',
            });
            return;
        }else{

        const response = await axios.post('api/mo-jwt-register', {
          apikey : 'VZtfDKKhHoXoPwaDUcZOOpTuMYWEuBYV',
          username : username,
          password : password,
        });
  
        // Successful registration logic
        if (response.status === 200) {
          Swal({
            title: 'ลงทะเบียนสำเร็จ',
            text: 'คุณได้ลงทะเบียนเรียบร้อยแล้ว!',
            icon: 'success',
          }).then(() => {
            history.push('/login'); // Navigate to login page after successful registration
          });
        }
    }
      } catch (error) {
        console.error("Registration error:", error);
        Swal({
            title: 'การลงทะเบียนล้มเหลว',
            text: 'มีปัญหาในการลงทะเบียนของคุณ กรุณาลองอีกครั้ง',
            icon: 'error',    
        });
      }
    };

  return (
    <IonPage>
      <IonContent color={'main'}>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonImg src="/icon/KJKJ_LOGO.png" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonInput
              className="form_login"
              placeholder="Name"
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
              autocomplete="off"
            />
          </IonRow>
          <IonRow className="ion-padding-top">
            <IonInput
              className="form_login"
              placeholder="Username" // Changed from Email to Username
              value={username} // Updated state variable
              onIonChange={(e) => setUsername(e.detail.value!)} // Updated state function
              autocomplete="off"
            />
          </IonRow>
          <IonRow className="ion-padding-top">
            <IonInput
              type="password"
              className="form_login"
              placeholder="Password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              autocomplete="off"
            />
          </IonRow>
          <IonRow className="ion-padding-top">
            <IonInput
              type="password"
              className="form_login"
              placeholder="Confirm Password" // New input for confirming password
              value={confirmPassword} // State for confirm password
              onIonChange={(e) => setConfirmPassword(e.detail.value!)} // Update state
              autocomplete="off"
            />
          </IonRow>
          <IonRow className="ion-padding-top">
            <IonCol>
              <IonButton
                className="form_submit"
                expand="block"
                color={'submit'}
                onClick={handleRegister}
              >
                REGISTER
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText>
                Already have an account? <a href="#" onClick={() => history.push('/login')}>Login</a>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
