-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 22, 2017 at 04:36 PM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hrm`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `confirmpassword` varchar(100) NOT NULL,
  `active` char(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `username`, `email`, `password`, `confirmpassword`, `active`) VALUES
(8, 'majid khan', 'majid@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', '123456', '1'),
(9, 'kuddus', 'kussu452@gmail.com', '25f9e794323b453885f5181f1b624d0b', '25f9e794323b453885f5181f1b624d0b', '1'),
(10, 'sdasd', 'sdasd@assd.s', 'a152e841783914146e4bcd4f39100686', 'a152e841783914146e4bcd4f39100686', '1'),
(11, 'masud', 'masud@gmail.com', '2d592cd6f6338d99d879cddeb9e51219', '2d592cd6f6338d99d879cddeb9e51219', '1'),
(12, 'masuda', 'masuda@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 'e10adc3949ba59abbe56e057f20f883e', '1'),
(13, 'asdsd', 'sdasdas@sda.dsfa', '912ec803b2ce49e4a541068d495ab570', '912ec803b2ce49e4a541068d495ab570', '1'),
(14, 'sifat', 'sifat@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 'e10adc3949ba59abbe56e057f20f883e', '1'),
(15, 'sohan', 'sohan@gmail.com', '17b3c7061788dbe82de5abe9f6fe22b3', '17b3c7061788dbe82de5abe9f6fe22b3', '1'),
(19, 'nahid', 'nahid@gmail.com', '040b7cf4a55014e185813e0644502ea9', '040b7cf4a55014e185813e0644502ea9', '1'),
(22, 'sohan ahmed', 'sohan@gmail.com', '23ad3e314e2a2b43b4c720507cec0723', '23ad3e314e2a2b43b4c720507cec0723', '1'),
(23, 'Shamim Hasan', 'shamim@gmail.com', 'cf25b4701ed85bdc1ef2088b51fcc8fe', 'cf25b4701ed85bdc1ef2088b51fcc8fe', '1'),
(24, 'aseed ahmed', 'aseefahmed@gmail.com', '25f9e794323b453885f5181f1b624d0b', '25f9e794323b453885f5181f1b624d0b', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
