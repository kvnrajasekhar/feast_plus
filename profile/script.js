// Event listener for Edit Profile button
document.getElementById('editProfileBtn').addEventListener('click', function () {
  // Hide the Profile section and show the Edit Profile form
  document.getElementById('profileSection').style.display = 'none';
  document.getElementById('editProfileSection').style.display = 'block';

  // Populate the edit form fields with the current profile data
  document.getElementById('editName').value = document.getElementById('displayName').textContent || '';
  document.getElementById('editMobile').value = document.getElementById('displayMobile').textContent || '';
  document.getElementById('editEmail').value = document.getElementById('displayEmail').textContent || '';
  document.getElementById('editAddress').value = document.getElementById('displayAddress').textContent || '';
});

// Event listener for Save button
document.getElementById('saveProfileBtn').addEventListener('click', function () {
  // Get updated values from the form
  const updatedName = document.getElementById('editName').value;
  const updatedMobile = document.getElementById('editMobile').value;
  const updatedEmail = document.getElementById('editEmail').value;
  const updatedAddress = document.getElementById('editAddress').value;

  // Update the profile display with new values
  document.getElementById('displayName').textContent = updatedName;
  document.getElementById('displayMobile').textContent = updatedMobile;
  document.getElementById('displayEmail').textContent = updatedEmail;
  document.getElementById('displayAddress').textContent = updatedAddress;

  // Hide the Edit Profile form and show the Profile section
  document.getElementById('editProfileSection').style.display = 'none';
  document.getElementById('profileSection').style.display = 'block';
});

