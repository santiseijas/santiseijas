import ProjectCard from '@/src/components/projectCard'

const projects = [
  {
    name: 'Eccocar',
    description:
      'A white-label application for vehicle rentals, offering both micromobility options (rentals by the minute) and longer-term rentals (rent a car). Responsible for all aspects of the app, including new feature development, bug fixing, and managing app store submissions.',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Jenkins'],
    images: [
      {
        src: 'https://play-lh.googleusercontent.com/dYfdD_INFez_5gESF9sOl1lGbhMyVvpHJByNqA3U3LqLhgYoHTxfmH5ZOpCmwG8q4yA=w526-h296-rw',
        alt: 'https://play-lh.googleusercontent.com/dYfdD_INFez_5gESF9sOl1lGbhMyVvpHJByNqA3U3LqLhgYoHTxfmH5ZOpCmwG8q4yA=w526-h296-rw'
      },
      {
        src: 'https://play-lh.googleusercontent.com/omq5XKXSFHHP0_5DvfCz-JH1fA5PhBRLdio16BaPC9ak-l0SdSQLMRlzPvigtUVTinYW=w526-h296-rw',
        alt: 'https://play-lh.googleusercontent.com/omq5XKXSFHHP0_5DvfCz-JH1fA5PhBRLdio16BaPC9ak-l0SdSQLMRlzPvigtUVTinYW=w526-h296-rw'
      },
      {
        src: 'https://play-lh.googleusercontent.com/PPW59XCiAp7VI5lugGdl7wmUFxGbj2k8SvDBZnwnHrhnvHVoH2uCkuDfUTpjlC7JCX4=w526-h296-rw',
        alt: 'https://play-lh.googleusercontent.com/PPW59XCiAp7VI5lugGdl7wmUFxGbj2k8SvDBZnwnHrhnvHVoH2uCkuDfUTpjlC7JCX4=w526-h296-rw'
      },
      {
        src: 'https://play-lh.googleusercontent.com/HVHQTjzjnuIknUELXn4H_bQw1GqP_GxE09w-oM_EGi8rX06mPdXSiF3L1CF2prkM_b85=w526-h296-rw',
        alt: 'https://play-lh.googleusercontent.com/HVHQTjzjnuIknUELXn4H_bQw1GqP_GxE09w-oM_EGi8rX06mPdXSiF3L1CF2prkM_b85=w526-h296-rw'
      },
      {
        src: 'https://play-lh.googleusercontent.com/-CyrXP4-n0bHiQMR6PMZ_WBSyRnuCMT33ivYuLrAqnaeKGb7xb0yczmQRj_ksHZDuSw=w526-h296-rw',
        alt: 'https://play-lh.googleusercontent.com/-CyrXP4-n0bHiQMR6PMZ_WBSyRnuCMT33ivYuLrAqnaeKGb7xb0yczmQRj_ksHZDuSw=w526-h296-rw'
      },
      {
        src: 'https://play-lh.googleusercontent.com/5pOQWxG6QE0X5xrMwPFYN_QWzJpOm6fq8QnEZdYDiCOhsj28R9UX8QFcdA12df5jaBU=w526-h296-rw',
        alt: 'https://play-lh.googleusercontent.com/5pOQWxG6QE0X5xrMwPFYN_QWzJpOm6fq8QnEZdYDiCOhsj28R9UX8QFcdA12df5jaBU=w526-h296-rw'
      }
    ]
  },
  {
    name: 'SABA Parking',
    description:
      'An app for reserving and paying for parking, focused on the UK market. Responsible for error correction, app maintenance, and implementing new features as requested by the client.',
    technologies: ['React Native', 'TypeScript', 'GitlabCI', 'Detox'],
    link: 'https://play.google.com/store/apps/details?id=com.saba.parking',
    images: [
      {
        src: 'https://play-lh.googleusercontent.com/etxDEgp5xYthHzgmmT45VUCoC5wBNFannt2Hvx1oqD643ir5aKIwqEEC4R96001y5xo=w526-h296-rw',
        alt: 'https://play-lh.googleusercontent.com/etxDEgp5xYthHzgmmT45VUCoC5wBNFannt2Hvx1oqD643ir5aKIwqEEC4R96001y5xo=w526-h296-rw'
      },
      {
        src: 'https://play-lh.googleusercontent.com/vCb8vcoijgWfC0koTs7R8clS3tij9sIOr9QXjw3RgZ1Q7e15DITbfM8wrtJxb7FyvQ=w526-h296-rw',
        alt: 'https://play-lh.googleusercontent.com/vCb8vcoijgWfC0koTs7R8clS3tij9sIOr9QXjw3RgZ1Q7e15DITbfM8wrtJxb7FyvQ=w526-h296-rw'
      },
      {
        src: 'https://play-lh.googleusercontent.com/Egpr8WGSItHHpIFeonG3SECYwl0ddibEe8di_8XTA8IIVnWB8VqxkEu3iCoGn1hB_7E=w526-h296-rw',
        alt: 'https://play-lh.googleusercontent.com/Egpr8WGSItHHpIFeonG3SECYwl0ddibEe8di_8XTA8IIVnWB8VqxkEu3iCoGn1hB_7E=w526-h296-rw'
      },
      {
        src: 'https://play-lh.googleusercontent.com/jMB-WJLcCnaYx8mST4mnogstIVIku-afgou_qCGjS_k2f9rKn3e64eFbHIeI-pJjuk-v=w526-h296-rw',
        alt: 'https://play-lh.googleusercontent.com/jMB-WJLcCnaYx8mST4mnogstIVIku-afgou_qCGjS_k2f9rKn3e64eFbHIeI-pJjuk-v=w526-h296-rw'
      },
      {
        src: 'https://play-lh.googleusercontent.com/buV-I_psSWACoaYyfOZmVjymF7pesKhUeM_IeU0hMJ86TrNVCcuwuDVrj-5bif8CfQ=w526-h296-rw',
        alt: 'https://play-lh.googleusercontent.com/buV-I_psSWACoaYyfOZmVjymF7pesKhUeM_IeU0hMJ86TrNVCcuwuDVrj-5bif8CfQ=w526-h296-rw'
      },
      {
        src: 'https://play-lh.googleusercontent.com/pu8-zfPe3y2GJWDWfrLSTxUd3jV2wxzaiHr0-qdOk3d_mfpqquRdkSN0OFEvR-C7Lg=w526-h296-rw',
        alt: 'https://play-lh.googleusercontent.com/pu8-zfPe3y2GJWDWfrLSTxUd3jV2wxzaiHr0-qdOk3d_mfpqquRdkSN0OFEvR-C7Lg=w526-h296-rw'
      },
      {
        src: 'https://play-lh.googleusercontent.com/JJiqYxgfKo22_N4cbRZva77DlontNjuzaHyMmIk-bIEZjM7Xycy255VpX76ukrnJX1k=w526-h296-rw',
        alt: 'https://play-lh.googleusercontent.com/JJiqYxgfKo22_N4cbRZva77DlontNjuzaHyMmIk-bIEZjM7Xycy255VpX76ukrnJX1k=w526-h296-rw'
      },
      {
        src: 'https://play-lh.googleusercontent.com/q_v1tiXqhpu4qnGRKzLIlWUglOfsAf7aCA0Pf6uUALSyicYx49Qzb8Qxt__rDtawmoQ=w526-h296-rw',
        alt: 'https://play-lh.googleusercontent.com/q_v1tiXqhpu4qnGRKzLIlWUglOfsAf7aCA0Pf6uUALSyicYx49Qzb8Qxt__rDtawmoQ=w526-h296-rw'
      }
    ]
  }
]

const Projects: React.FC = () => {
  return (
    <div className=''>
      <div className='justify-center'>
        {projects.map(project => (
          <div key={project.name}>
            <ProjectCard key={project.name} {...project} images={project.images} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Projects
