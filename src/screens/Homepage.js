import React, { useEffect, useState } from 'react';
import { Modal, View, TextInput, Button, Text, ScrollView } from 'react-native';
import { urlHead } from '../helper/extrapropertise';

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



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',gap:'10px' }}>
      <Button title="Open Project Details" onPress={() => setModalVisible(true)} />
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
            <Text>Project Details</Text>
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
            <Button title="Submit" onPress={() => Modal1Bkcall()} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default ProjectDetailsModal;
