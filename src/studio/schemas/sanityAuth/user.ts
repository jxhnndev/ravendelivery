export default {
  name: 'user',
  title: 'User',
  type: 'document',
  initialValue: {
    usertype: "customer"
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
        name: 'emailVerified',
        type: 'datetime',
        hidden: true,
    },
    {
      name: 'password',
      type: 'string',
      hidden: true
    },
    {
      name: 'isAdmin',
      title: 'Is Admin',
      type: 'boolean',
    },
    {
        name: 'image',
        title: 'Image',
        type: 'url'
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  initialValue: {
    // this overrides the initial value defined on the field
    isAdmin: false
  }
};