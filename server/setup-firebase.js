/**
 * Firebase Database Setup Script
 * Run this once to initialize your Firestore database structure
 * 
 * This script uses Firebase Admin SDK which has elevated privileges
 * and doesn't require authentication.
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
// For local development, we'll use the project ID from environment
// In production, you should use a service account key file
admin.initializeApp({
  projectId: process.env.PUBLIC_FIREBASE_PROJECT_ID,
});

const db = admin.firestore();

async function setupDatabase() {
  console.log('🔥 Setting up Firebase Database...\n');
  console.log('Project ID:', process.env.PUBLIC_FIREBASE_PROJECT_ID);

  try {
    // Create a placeholder document in each collection
    // (Firestore creates collections when first document is added)

    console.log('\n📊 Creating collections structure...');

    // 1. Create users collection placeholder
    await db.collection('users').doc('_placeholder').set({
      _placeholder: true,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      note: 'This is a placeholder. Real user docs will be created on signup.'
    });
    console.log('✅ Users collection created');

    // 2. Create vaults collection placeholder
    await db.collection('vaults').doc('_placeholder').set({
      _placeholder: true,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      note: 'This is a placeholder. Real vaults will be created by users.'
    });
    console.log('✅ Vaults collection created');

    // 3. Create files collection placeholder
    await db.collection('files').doc('_placeholder').set({
      _placeholder: true,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      note: 'This is a placeholder. Real file metadata will be stored here.'
    });
    console.log('✅ Files collection created');

    // 4. Create shared collection placeholder
    await db.collection('shared').doc('_placeholder').set({
      _placeholder: true,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      note: 'This is a placeholder. Shared documents will be stored here.'
    });
    console.log('✅ Shared collection created');

    console.log('\n🎉 Database setup complete!');
    console.log('\n📋 Collections created:');
    console.log('   - users (for user profiles)');
    console.log('   - vaults (for secure vaults)');
    console.log('   - files (for file metadata)');
    console.log('   - shared (for shared documents)');
    console.log('\n⚠️  Remember to:');
    console.log('   1. Update your Firestore security rules in Firebase Console');
    console.log('   2. Update your Storage security rules in Firebase Console');
    console.log('   3. Enable Authentication methods in Firebase Console');
    console.log('      - Go to: https://console.firebase.google.com/project/' + process.env.PUBLIC_FIREBASE_PROJECT_ID + '/authentication/providers');

  } catch (error) {
    console.error('\n❌ Error setting up database:');
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);

    if (error.code === 7) {
      console.error('\n⚠️  PERMISSION DENIED ERROR');
      console.error('This usually means:');
      console.error('1. You need to set up a Firebase service account');
      console.error('2. Or run this from an authenticated environment');
      console.error('\nTo fix this:');
      console.error('1. Go to Firebase Console > Project Settings > Service Accounts');
      console.error('2. Click "Generate New Private Key"');
      console.error('3. Save the JSON file as "serviceAccountKey.json" in the server directory');
      console.error('4. Update this script to use: admin.initializeApp({ credential: admin.credential.cert(serviceAccountKey) })');
    }

    process.exit(1);
  }
}

// Run the setup
setupDatabase()
  .then(() => {
    console.log('\n✨ You can now start using your Firebase database!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\nFatal error:');
    console.error('Message:', error.message);
    console.error('Code:', error.code);
    process.exit(1);
  });
