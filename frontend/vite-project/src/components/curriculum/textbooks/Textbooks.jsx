import React from 'react';

function Textbooks() {
  return (
    <div className='p-5'>
      {/* SEM I */}
      <h2 className='text-dark bg-light d-inline p-2' >SEM I</h2>
      <table className='table table-bordered table-striped table-dark mt-3 mb-5' >
        <thead className='thead-dark'>
          <tr>
            <th>Course</th>
            <th>Primary Textbook</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Problem solving techniques</td>
            <td>How to Solve it by Computer, R.G. Dromey, First Edition, 2006, Pearson</td>
          </tr>
          <tr>
            <td>Calculus and Linear Algebra</td>
            <td>
              B.S. Grewal, Higher Engineering Mathematics, Khanna Publishers, 44/e, 2019. <br />
              Erwin Kreyszig, Advanced Engineering Mathematics, 9/e, John Wiley & Sons, 2006
            </td>
          </tr>
          <tr>
            <td>Engineering Physics</td>
            <td>
              R. K. Gaur, S. L. Gupta, ―Engineering Physics‖, Dhanpat Rai Publications, 8th Edition, 2001. <br />
              S. O. Pillai, Solid State Physics, New Age International Publishers, 7th edition (2016)
            </td>
          </tr>
          <tr>
            <td>BEEE</td>
            <td>
              D.P. Kothari, I.J. Nagrath, Basic Electrical and Electronics Engineering, 1st Edition, McGraw Hill Education (India) Private Limited, 2017. <br />
              B.L. Theraja, Fundamentals of Electrical Engineering and Electronics, 1st Edition, S. Chand Publishing, New Delhi, 2006. <br />
              Millman Jacob, Halkias C Christos, Electronic Devices and Circuits, 2nd Edition, Tata McGraw-Hill Publications, 2007.
            </td>
          </tr>
          <tr>
            <td>Communicative English - 1</td>
            <td>
              Prabhavathy Y, M.Lalitha Sridevi, Ruth Z. Hauzel, ―English all Round 1: Communication skills for Undergraduate students‖, Orient Black Swan, 2019
            </td>
          </tr>
        </tbody>
      </table>

      {/* SEM II */}
      <h2 className='text-dark bg-light d-inline p-2'>SEM II</h2>
      <table className='table table-bordered table-striped table-dark mt-3 mb-5'>
        <thead className='thead-dark'>
          <tr>
            <th>Course</th>
            <th>Primary Textbook</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Engineering Chemistry</td>
            <td>
              1. P.C. Jain and M. Jain, Engineering Chemistry, 15/e, Dhanapat Rai & Sons, Delhi (2014). <br />
              2. B.K. Sharma, Engineering Chemistry, Krishna Prakashan, Meerut. <br />
              3. O.G. Palanna, Engineering Chemistry, Tata McGraw Hill (2009).
            </td>
          </tr>
          <tr>
            <td>Programming and Problem Solving using C</td>
            <td>
              1. Programming in C, Reema Thareja, AICTE Edition, 2018, Oxford University Press.
            </td>
          </tr>
          <tr>
            <td>Communicative English - II</td>
            <td>
              1. Prabhavathy Y, M.Lalitha Sridevi, ―English all Round 2: Communication skills for Undergraduate students‖, Orient Black Swan, 2020.
            </td>
          </tr>
          <tr>
            <td>Probability and Statistics</td>
            <td>
              1. S.C. Gupta and V.K. Kapoor, Fundamentals of Mathematical Statistics, 11/e, Sultan Chand & Sons Publications, 2012. <br />
              2. Dr. T.K.V. Iyengar, Dr. B. Krishna Gandhi, S. Ranganatham, Dr. M.V.S.S.N. Prasad, Probability & Statistics, S. Chand, 4th Revised Edition, 2012.
            </td>
          </tr>
          <tr>
            <td>Engineering Graphics (Drawing)</td>
            <td>
              1. N.D. Bhatt, Engineering Drawing, 53/e, Charotar Publishers, 2016. <br />
              2. K.L. Narayana & P. Kannaiah, Engineering Drawing, 3/e, Scitech Publishers, 2012.
            </td>
          </tr>
        </tbody>
      </table>

      {/* SEM III */}
      <h2 className='text-dark bg-light d-inline p-2'>SEM III</h2>
      <table className='table table-bordered table-striped table-dark mt-3 mb-5'>
        <thead className='thead-dark'>
          <tr>
            <th>Course</th>
            <th>Primary Textbook</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Discrete Mathematical Structures</td>
            <td>
              1. Discrete Mathematical Structures with Applications to Computer Science, J.P. Trembly and R. Manohar, 1988, McGraw-Hill (Unit-I, II). <br />
              2. Discrete Mathematics for Computer Scientists & Mathematicians, Joe L. Mott, Abraham Kandel, and Theodore P. Baker, Second Edition, 2017, PHI (Unit-III, IV, V).
            </td>
          </tr>
          <tr>
            <td>Data Structures</td>
            <td>
              1. Data Structures and Algorithm Analysis in C, Mark Allen Weiss, Second Edition, 2002, Pearson. <br />
              2. Introduction to Algorithms, Thomas H. Cormen, et al., Third Edition, 2010, PHI. <br />
              3. Data Structures and Algorithms Made Easy by Narasimha Karumanchi, 2020, CareerMonk Publications.
            </td>
          </tr>
          <tr>
            <td>Fundamentals of Digital Logic Designing</td>
            <td>
              1. Digital Design, M. Morris Mano, Michael D. Ciletti, Fifth Edition, 2013, Pearson.
            </td>
          </tr>
          <tr>
            <td>Object Oriented Programming through C++</td>
            <td>
              1. Programming in C++, Ashok N. Kamthane, Second Edition, 2013, Pearson.
            </td>
          </tr>
          <tr>
            <td>Computer Organisation and Architecture</td>
            <td>
              1. Computer System Architecture, Morris M. Mano, Third Edition, 1992, Pearson.
            </td>
          </tr>
        </tbody>
      </table>

      {/* SEM IV */}
      <h2 className='text-dark bg-light d-inline p-2'>SEM IV</h2>
      <table className='table table-bordered table-striped table-dark mt-3 mb-5'>
        <thead className='thead-dark'>
          <tr>
            <th>Course</th>
            <th>Primary Textbook</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Formal Languages and Automata Theory</td>
            <td>
              1. Introduction to Automata Theory, Languages and Computations, J.E. Hopcroft, R. Motwani, and J.D. Ullman, Third Edition, Pearson Education. <br />
              2. Theory of Computer Science, Automata Languages and Computation, Mishra, Chandra Shekaran, Second Edition, PHI.
            </td>
          </tr>
          <tr>
            <td>Operating Systems</td>
            <td>
              Operating System Concepts, Abraham Silberchatz, Peter Baer Galvin, Greg Gagne, Ninth Edition, 2016, Wiley India.
            </td>
          </tr>
          <tr>
            <td>Advanced Data Structures</td>
            <td>
              1. Data Structures and Algorithm Analysis in C++, Mark Allen Weiss, 4th Edition, 2014, Pearson. <br />
              2. Introduction to Algorithms, Thomas H. Cormen, et al., 3rd Edition, 2009, The MIT Press.
            </td>
          </tr>
          <tr>
            <td>Design and Analysis of Algorithms</td>
            <td>
              1. Introduction to the Design & Analysis of Algorithms, Anany Levitin, Third Edition, 2011, Pearson Education. <br />
              2. Data Structures and Algorithm Analysis in C, Mark Allen Weiss, 2002, Pearson. <br />
              3. Algorithm Design Techniques, Narasimha Karumanchi, CareerMonk Publications, 2018.
            </td>
          </tr>
          <tr>
            <td>Internet of Things</td>
            <td>
              1. Adrian McEwen, Hakim Cassimally - Designing the Internet of Things, Wiley Publications, 2012. <br />
              2. David Hanes, et al. - IoT Fundamentals: Networking Technologies, Protocols, and Use Cases for the Internet of Things, 1st Edition, Pearson Education (Cisco Press Indian Reprint).
            </td>
          </tr>
        </tbody>
      </table>

      {/* SEM V */}
      <h2 className='text-dark bg-light d-inline p-2'>SEM V</h2>
      <table className='table table-bordered table-striped table-dark mt-3 mb-5'>
        <thead className='thead-dark'>
          <tr>
            <th>Course</th>
            <th>Primary Textbook</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Software Engineering</td>
            <td>
              1. Software Engineering: A Practitioner's Approach, Roger S. Pressman, Bruce R. Maxim, Eighth edition, 2015, McGraw Hill, International Edition. <br />
              2. Robert C. Martin, Agile Software Development, Principles, Patterns, and Practices Alan Apt Series (2011).
            </td>
          </tr>
          <tr>
            <td>Database Management System</td>
            <td>
              Fundamentals of Database Systems, Ramez Elmasri, Shamkant B. Navathe, Seventh edition, Pearson.
            </td>
          </tr>
          <tr>
            <td>Computer Networks</td>
            <td>
              Data Communications and Networking, Behrouz A. Forouzan, Fifth Edition, McGraw Hill.
            </td>
          </tr>
          <tr>
            <td>Artificial Intelligence</td>
            <td>
              Stuart Russell and Peter Norvig, ―Artificial Intelligence: A Modern Approach‖, 3rd Edition, Prentice Hall.
            </td>
          </tr>
          <tr>
            <td>Data Science</td>
            <td>
              1. Introducing Data Science, David Cielen, Arno D. B. Meysman, and Mohamed Ali, 2016, Manning Publications (UNIT-I). <br />
              2. Data Mining: Concepts and Techniques, Jiawei Han, Micheline Kamber and Jian Pei, Third edition, Morgan Kaufmann (UNIT-II). <br />
              3. The Elements of Statistical Learning, Trevor Hastie, Robert Tibshirani, Jerome Friedman, Second Edition, Springer (UNIT-III, IV, V).
            </td>
          </tr>
          <tr>
            <td>Design Thinking</td>
            <td>
              1. Change by Design, Tim Brown, 2009, HarperCollins. <br />
              2. Engineering Design, George E Dieter, 4th Revised Edition, 2009 McGraw Hill.
            </td>
          </tr>
        </tbody>
      </table>

      {/* SEM VI */}
      <h2 className='text-dark bg-light d-inline p-2'>SEM VI</h2>
      <table className='table table-bordered table-striped table-dark mt-3 mb-5'>
        <thead className='thead-dark'>
          <tr>
            <th>Course</th>
            <th>Primary Textbook</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Compiler Design</td>
            <td>
              Compilers: Principles, Techniques and Tools, Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman, Second Edition, Pearson Education.
            </td>
          </tr>
          <tr>
            <td>Machine Learning</td>
            <td>
              1. Machine Learning by Tom M. Mitchell, Indian Edition 2013, McGraw Hill Education. <br />
              2. Machine Learning by Saikat Dutt, Subramanian Chandramouli, Amit Kumar Das, First Edition, 2019, Pearson Education. <br />
              3. Data Mining Concepts and Techniques, Jiawei Han, Micheline Kamber, Jian Pei, Third Edition, 2012.
            </td>
          </tr>
          <tr>
            <td>MERN Stack Development</td>
            <td>
              1. Node.js, MongoDB and Angular Web Development by Brad Dayley, Brendan Dayley, Caleb Dayley, 2nd edition, Pearson. <br />
              2. Learning React Modern Patterns for Developing React Apps, 2nd Edition, O'Reilly.
            </td>
          </tr>
          <tr>
            <td>Open Elective</td>
            <td></td>
          </tr>
          <tr>
            <td>Professional Elective</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Textbooks;
