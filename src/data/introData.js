import React from 'react';
const IntroData = {
  data: [
    {
      id: '1',
      bookSection: 'Intro',
      pageType: 'SectionIntroduction',
      pageHeader: 'Introduction',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Introduction</h1>
          <p class='section-intro-text'>Being sick can be a lot to manage!</p>
        </section>
      )
    },
    {
      id: '2',
      bookSection: 'Intro',
      pageHeader: 'Background',
      htmlContent: (
        <article id='Introduction'>
          <h1>It started in an Ambulance in Thailand... </h1>
          <p>
            Recently I found myself in an ambulance travelling across Thailand
            with a suspected heart attack. This was just the beginning of a
            journey which took me to three hospitals in three countries. At the
            same time my uncle was about to be released from hospital with a
            dangerous condition that only through his management of the
            situation was prevented.
          </p>

          <p>
            I was prepared to feel sick and scared about my illness, but was not
            prepared for a host of other difficulties I would experience while
            in hospital. After speaking with my uncle and others, I could see
            that the problems I experienced were shared by many.{' '}
          </p>

          <p>
            The last thing I wanted to do was think through problems and create
            solutions while I was in hospital, but eventually I started to
            figure things out and get organised. As I progressed in setting up
            systems and managing things, management of my stay became much
            easier.
          </p>

          <p>
            Now I have done the work, at least I know that next time my stay
            will much easier to manage. I hope others can benefit from my work
            as well. This is the reason I wrote this book.
          </p>
        </article>
      )
    },
    {
      id: '3',
      bookSection: 'Intro',
      pageHeader: 'About the Book',
      htmlContent: (
        <article id='Introduction'>
          <h1>The Purpose of this book</h1>
          <p>
            The purpose of this book is to reduce the amount of things you need
            to remember or manage when you are in hospital. That way you can
            focus on rest whilst feeling your recovery is moving in the right
            direction.
          </p>
          <h1>What is this book?</h1>
          <p>
            The book design is based on my experience and feedback from patients
            and healthcare professionals. It is designed to be;
          </p>
          <p>
            <strong>Simple: </strong> It should take 10 mins or less of simple
            reading before you can get started.
          </p>
          <p>
            <strong>An Organizer: </strong>All you need is a pen to start
            managing things more effectivly.
          </p>
          <h1>What is it not?</h1>
          <ul>
            <li className='text'>A reference book or information source</li>
            <li className='text'>
              A guide to health care or a medical document.
            </li>
          </ul>
        </article>
      )
    },
    {
      id: '4',
      bookSection: 'Intro',
      pageHeader: '',
      htmlContent: (
        <article id='Introduction'>
          <h1 class='section-header'>How to use this book</h1>
          <p>
            The book is split into sections. The sections are mostly worksheets
            this guides you through what you have to do to make organizing your
            time in hospital as easy as possible.
          </p>

          <p>
            The sections are marked on the right tabs to make it easy to find;
          </p>
          <ul>
            <li>Start</li>
            <li>Diary</li>
            <li>Diagnosis</li>
            <li>Release</li>
            <li>Extras</li>
          </ul>
          
         
        </article>
      )
    },
    {
      id: '5',
      bookSection: 'Intro',
      pageHeader: '',
      htmlContent: (
        <article id='Introduction'>
        <h1>Start</h1>
          <p>
            Suggestions of items that if you do now will make things easier
            later this includes
          </p>
          <ul>
            <li>Some handy items to have to make your stay easier</li>
            <li>
              Some Information to write down to reduce you repeating yourself
            </li>
            <li>
              Some tips on how to keep friends and family updated and manage
              doctors meetings
            </li>
          </ul>
          <h1>Diary</h1>
          <p>
            This involves everything you need to document your stay in hospital,
            it contains the following sections;
          </p>
          <h2 className='text-subheading'>Timeline Summary</h2>
          <p className='text-subheading'>
            This is intented for you to summarize the main events to make it
            easier to communicate with staff about what has happened.
          </p>
          <h2 className='text-subheading'>The Daily Diary</h2>
          <p className='text-subheading'>
            This section is a one page per day diary, there is enough pages for
            30 days. It can be useful to gain perspective on your experience or
            help if there are difficulties in treatment or diagnosis.
          </p>
          <h2 className='text-subheading'>Doctor Meeting Notes </h2>
          <p className='text-subheading'>
            Each day has a section for questions and answers for the doctor
            meetings so you don’t forget them.
          </p>
         
          
        </article>
      )
    },
    {
      id: '6',
      bookSection: 'Intro',
      pageHeader: '',
      htmlContent: (
        <article id='Introduction'>
          <h1>Diagnosis</h1>
          <p>
            This section comes in most usefull if your condition is not clear or
            your symptoms change. If that is the case then you can build a
            comprohensive record here and may make diagnosis easier.
          </p>
          <p>
            {' '}
            If you only have one symptom and the cause of that symptom seems to
            be unchanged througout your hospital stay, then you will only need
            to use the first box in this section.{' '}
          </p>

          <p>
            It is not essential to have all the information such as the name of
            the doctor and exact dates but sometimes it can be helpfull, so just
            fill in what you feel comfortable with.
          </p>
        </article>
      )
    },
    {
      id: '6',
      bookSection: 'Intro',
      pageHeader: '',
      htmlContent: (
        <article id='Introduction'>
          
          <h1>Release</h1>
          <p>Advice on how to best manage your release from hospital</p>
          <h1>Extras</h1>
          <p>
            Additional worksheets and resourses that you might also find usefull{' '}
          </p>
          <ul>
            <li>Drug Log</li>
            <li>Events Prior to Illness log</li>
            <li>Internet resources</li>
          </ul>
        </article>
      )
    }
   
  ]
};

export default IntroData;
