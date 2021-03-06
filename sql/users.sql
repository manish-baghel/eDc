-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 18, 2017 at 03:49 AM
-- Server version: 5.7.20-0ubuntu0.16.04.1
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edc`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `Role` varchar(255) DEFAULT NULL,
  `verify` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `email`, `password`, `Role`, `verify`, `createdAt`, `updatedAt`) VALUES
(1, 'Sunil', 'Kumar', 'sunilssaharan@gmail.com', '$2a$10$IzmRThAYT7Zb5h3FWB7yj.jlkZrX8ohyIQyrJDrv5vlZHSCG29f9m', 'member', 1, '2017-12-17 22:01:43', '2017-12-17 22:01:43'),
(2, 'google', NULL, 'cs1160314@cse.iitd.ac.in', '$2a$10$/gA8/DyRSOW1tOH1eyEUbOKi80RSlGbi0qmrSgwA0wpMai5ybMHLi', 'company', 1, '2017-12-17 22:02:17', '2017-12-17 22:02:17'),
(3, 'Manish ', 'Baghel', 'randi@randibaaz.com', '$2a$10$SzWHBAZ0hSl8s9A.6lKfh.0iyznRIhlJ0yzrd591bWBQ/ApV8SNEG', 'member', 0, '2017-12-17 22:04:19', '2017-12-17 22:04:19'),
(4, 'microsoft', NULL, 'a@b.com', '$2a$10$VqmVxAjEr7HRGE4gOtPh0.Aeh0NRNsKAL8JQrlUN1oId9lNSQBJma', 'company', 0, '2017-12-17 22:05:24', '2017-12-17 22:05:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
