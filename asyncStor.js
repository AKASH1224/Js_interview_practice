const updatePreferences = async (userPreferences) => {
  try {
    const jsonValue = JSON.stringify(userPreferences)
    await AsyncStorage.setItem(“preferences”, jsonValue)
  } catch(e) {
   // Handle error
  }
}

const newPreferences = {
  pushNotifications: true,
  emailNotifications: true,
  smsNotifications: true
}; 

updatePreferences(newPreferences);