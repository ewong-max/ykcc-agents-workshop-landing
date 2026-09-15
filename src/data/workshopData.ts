/**
 * Language-neutral facts about the workshop.
 *
 * Everything here reads identically in English and Chinese — contact details,
 * the venue, fee amounts, and the HRD Corp registration numbers — so it lives
 * in one place and a correction only has to be made once.
 *
 * All translatable wording lives in ../i18n/en.ts and ../i18n/zh.ts.
 */

export const ORGANIZER_INFO = {
  brandName: 'YKCC',
  email: 'ykcc@yk.com.my',
  phone: '03-6272 6933',
  address:
    'No. 37, Jalan 9/62A, Bandar Menjalara, Kepong, 52200 Kuala Lumpur, Wilayah Persekutuan, Malaysia',
  website: 'www.yk.com.my'
};

/** Venue. The address is not translated — it is what you give a driver or type into Maps. */
export const WORKSHOP_VENUE = {
  address: 'No. 37, Jalan 9/62A, Bandar Menjalara, Kepong, 52200 Kuala Lumpur, Wilayah Persekutuan'
};

/** Course fee — per participant. */
export const PRICING = {
  currency: 'RM',
  hrdcClaimable: 2500,
  selfFunded: 2000,
  groupDiscountPercent: 30
};

/**
 * HRD Corp registration details, from the official Letter of Register Program
 * (Application No 10001754409, dated 14/09/2026). Training providers may only
 * market a claimable course using this registered title and programme number,
 * which is why the course title is not translated on the Chinese page either.
 */
export const HRD_CORP_INFO = {
  registeredCourseTitle: 'AI Agents for Business 101',
  applicationNo: '10001754409',
  programmeNo: '10001756328',
  scheme: 'SBL-Khas (Skim Bantuan Latihan Khas)',
  mycoid: '19960102855',
  trainer: 'Wong Yew Choon',
  validity: '9 September 2026 – 9 September 2027',
  trainingHours: 14
};
