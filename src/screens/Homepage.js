import React, { useEffect, useState } from 'react';
import { Modal, View, TextInput, Button, Text, ScrollView } from 'react-native';
import { urlHead } from '../helper/extrapropertise';
import axios, * as others from 'axios';

//const axios = require('axios');


const ProjectDetailsModal = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    clientName: '',
    projectType: '',
    projectHead: '',
    rccDesignerName: '',
    model3D: '',
    buildingApproval: '',
    plinth: '',
    buildingCompletion: '',
    pan: '',
    aadhar: '',
    pin: '',
    email: ''
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const Modal1Bkcall = () => {
    console.log("inside sendtobackend");
    console.log(formData);

    //      const [errormsg, setErrormsg] = useState(null);

    setFormData({
      title: '',
      clientName: '',
      projectType: '',
      projectHead: '',
      rccDesignerName: '',
      model3D: '',
      buildingApproval: '',
      plinth: '',
      buildingCompletion: '',
      pan: '',
      aadhar: '',
      pin: '',
      email: ''
    });

    fetch(`http://${urlHead}/clientData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
      mode: 'cors',
    })
      .then(res => res.json()).then(

        data => {
          // console.log("inside data form fe",data);
          //   console.log("normal data",data);
          //   var dataAsString = JSON.stringify(data);
          //   console.log("data as a string",dataAsString)
          //   var local = '{"message":"Data sent Registered Successfully"}';
          if (data.error === "Invalid Credentials") {
            setErrormsg(data.error);
          }
          else {
            //if(local==dataAsString){
            alert('Information saved to database');

            //}
          }
        }

      )

    setModalVisible(false);
    console.log("lets print form data", formData);
    console.log(formData);



  };
  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // You can perform further actions here, like sending the form data to a server
    // Reset form fields
    setFormData({
      title: '',
      clientName: '',
      projectType: '',
      projectHead: '',
      rccDesignerName: '',
      model3D: '',
      buildingApproval: '',
      plinth: '',
      buildingCompletion: '',
      pan: '',
      aadhar: '',
      pin: '',
      email: ''
    });
    // Close the modal
    setModalVisible(false);
    console.log("lets print form data", formData);
    
  };
  const [file,setFile]=useState(null);
  const [image,setImage]=useState()
  const  handleUpload = (e) =>{
      console.log(file);
      const formdata = new FormData()
      formData.append('file',file)
      axios.post('http://localhost:3000/upload',formdata)
      .then(res=>setImage(res.data[0].image))
      .catch(err=>console.log(err))

  }
  useEffect(()=>{
    axios.get('http://localhost:3000/getImage')
    .then(res=>setImage(res.data[0].image))
    .catch(err=>console.log(err))
  },[])
  
 



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',gap:'10px' }}>
      <Button title="Add new Project Details" onPress={() => setModalVisible(true)} />
      <Button title="Users" onPress={() =>
        navigation.navigate('Users')
      } />
        <Button title="Accounts" onPress={() =>
        navigation.navigate('Accounts')
      } />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <ScrollView style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Section 1: Client Basic Details</Text>
            <TextInput
              placeholder="Title"
              value={formData.title}
              onChangeText={(text) => handleInputChange('title', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Client Name"
              value={formData.clientName}
              onChangeText={(text) => handleInputChange('clientName', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Project Type"
              value={formData.projectType}
              onChangeText={(text) => handleInputChange('projectType', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Project Head"
              value={formData.projectHead}
              onChangeText={(text) => handleInputChange('projectHead', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="RCC Designer Name"
              value={formData.rccDesignerName}
              onChangeText={(text) => handleInputChange('rccDesignerName', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="3D Model"
              value={formData.model3D}
              onChangeText={(text) => handleInputChange('model3D', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Building Approval"
              value={formData.buildingApproval}
              onChangeText={(text) => handleInputChange('buildingApproval', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Plinth"
              value={formData.plinth}
              onChangeText={(text) => handleInputChange('plinth', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Building Completion"
              value={formData.buildingCompletion}
              onChangeText={(text) => handleInputChange('buildingCompletion', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="PAN"
              value={formData.pan}
              onChangeText={(text) => handleInputChange('pan', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Aadhar"
              value={formData.aadhar}
              onChangeText={(text) => handleInputChange('aadhar', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="PIN"
              value={formData.pin}
              onChangeText={(text) => handleInputChange('pin', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Email"
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <Text>Section 2: Presentation Drawing </Text>
            <TextInput
              placeholder="upload Presentation Drawing"
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="file upload Presentation Drawing"
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Add Button to add more presentation drawing"
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <Text>Section 3: 3D Model and Design </Text>
            <TextInput
              placeholder="Upload option to add 3d model 1"
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Upload option to add 3d model 2"
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Upload option to add 3d model 3"
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Add Button to add more presentation drawing"
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <Text>Section 4: Submission Drawing  </Text>
            <TextInput
              placeholder="Sanction Date add google Date "
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Plint "
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Revised Sanction Date "
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="Completion Date "
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <Text>Section 5: Working  Drawing  </Text>
            <TextInput
              placeholder="RCC drawing upload and give 2 checkbox "
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
             <TextInput
              placeholder="RCC : Column footing "
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
              <TextInput
              placeholder="RCC : Pleanth Beam "
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
              <TextInput
              placeholder="RCC : Staircase Drawing  "
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
              <TextInput
              placeholder="RCC : first Slab  "
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="RCC : Second  Slab  "
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="RCC : Third  Slab  "
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
              placeholder="ADD option to add more slab "
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />

            



            

            <Button title="Submit" onPress={() => Modal1Bkcall()} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </ScrollView>
        </View>
      </Modal>
      <div> 
          <input type='file' onChange={e=>setFile(e.target.files[0])}></input>
          <button onClick={handleUpload}>upload</button>
      </div>
      <br></br>
      <img src={`http://localhost:3000/Images/`+image} alt="link chalana"></img>
    </View>
  );
};

export default ProjectDetailsModal;
