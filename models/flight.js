import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema ({
  airline: {
    type: String,
    required: true,
    enum: [ 'Spirit', 'United', 'Delta', 'JetBlue', 'KoreaAir',]
  },
  airport: {
    type: String,
      enum: ['LAX', 'MCO', 'MIA', 'WPB', 'SLC']
    },
    flightNo: {
      type: Number,
      min: 10,
      max: 9999,
    },    
    departs: {
      type: Date,
      default: function() {
        return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    }
},
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight,
}