// 1. Kita udah tau role access nya apa aja
// 2. Kita belum tau role access nya apa aja

export const accessCategories = {
    // lihat: [''],
    lihat: ['organizer'],
    tambah: ['organizer'],
    edit: ['organizer'],
    hapus: ['organizer'],
  };
  
  export const accessTalents = {
    lihat: ['organizer'],
    tambah: ['organizer'],
    edit: ['organizer'],
    hapus: ['organizer'],
  };
  
  export const accessEvents = {
    lihat: ['organizer'],
    tambah: ['organizer'],
    edit: ['organizer'],
    hapus: ['organizer'],
  };
  
  export const accessParticipant = {
    lihat: ['organizer'],
    tambah: ['organizer'],
    edit: ['organizer'],
    hapus: ['organizer'],
  };
  export const accessPayments = {
    lihat: ['organizer'],
    tambah: ['organizer'],
    edit: ['organizer'],
    hapus: ['organizer'],
  };
  
  export const accessOrders = {
    lihat: ['admin', 'owner', 'organizer'],
    tambah: ['organizer', 'admin', 'owner'],
    edit: ['organizer', 'admin', 'owner'],
    hapus: ['organizer', 'admin', 'owner'],
  };
  