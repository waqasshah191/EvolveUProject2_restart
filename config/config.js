const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'mongodb+srv://C6_Project2_Team:of7ssGl6Z7XQZuSW@cluster1.w3ht4.mongodb.net/C6_Project2_Restart?retryWrites=true&w=majorityprocess.env.MONGODB_URI' ||
    process.env.MONGO_HOST
}

export default config
