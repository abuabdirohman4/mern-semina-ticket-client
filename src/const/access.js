/*
  2 Kondisi
  1. Kita udah tau role accesnya apa saja
  2. Kita belum tau role accessnya apa saja
*/

export const accessCategories = {
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
  lihat: ['organizer', 'admin', 'owner'],
  tambah: ['organizer', 'admin', 'owner'],
  edit: ['organizer', 'admin', 'owner'],
  hapus: ['organizer', 'admin', 'owner'],
};
