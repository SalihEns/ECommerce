-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Apr 12, 2021 at 08:20 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `it4ppl`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `rating` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `description` text NOT NULL,
  `caption` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `rating`, `image`, `price`, `description`, `caption`) VALUES
(3, 'Pos Machine', 3, './upload/products/PosMachine.png', 590.99, '\r\nPlug and Play, PIN and Pay – it’s the fastest, most secure, easiest-to-install PIN Pad on the market. When time and space are at a premium (in retail, when are they not?), the compact iPP350 series of retail PIN Pads is the unmatched option for adaptability and convenience.', 'A manually operated cash drawer is the perfect choice for cash handling'),
(4, 'Camera', 3, './upload/products/Cam2.png', 190.99, '50MP Full-Frame Exmor RS BSI CMOS Sensor\r\nUp to 30 fps Shooting, ISO 50-102400\r\n8K 30p and 4K 120p Video in 10-Bit\r\n4.3K 16-Bit Raw Video Output, S-Cinetone', 'A manually operated cash drawer is the perfect choice for cash handling'),
(5, 'Pos Machine', 2, './upload/products/PosSystems.png', 1590.99, 'No contract month-to-month rental empowering you to upgrade, downgrade, exchange and return your POS Credit & Debit Machines penalty-free. You can also own your Debit & Credit Machine through outright purchase or leasing programs made available to you.', 'A manually operated cash drawer is the perfect choice for cash handling'),
(6, 'Self Checkout', 5, './upload/products/self_Checkout.png', 10290.99, '- POS Inspired Design; Card Reader Compatible\r\n- Tilt and Swivel Head Mount\r\n- Stand Available in a Variety of Heights\r\n- Continuous Charging While Mounted\r\n- Through Arm Cable Management\r\n- Tamper Proof Screws for a Secure Installation\r\n', 'A manually operated cash drawer is the perfect choice for cash handling'),
(7, 'Self Checkout', 2, './upload/products/self_Checkout01.png', 12590.99, '- POS Inspired Design; Card Reader Compatible\r\n- Tilt and Swivel Head Mount\r\n- Stand Available in a Variety of Heights\r\n- Continuous Charging While Mounted\r\n- Through Arm Cable Management\r\n- Tamper Proof Screws for a Secure Installation\r\n', 'A manually operated cash drawer is the perfect choice for cash handling'),
(8, 'Self Checkout', 5, './upload/products/self_Checkout02.png', 19490.99, '- POS Inspired Design; Card Reader Compatible\r\n- Tilt and Swivel Head Mount\r\n- Stand Available in a Variety of Heights\r\n- Continuous Charging While Mounted\r\n- Through Arm Cable Management\r\n- Tamper Proof Screws for a Secure Installation\r\n', 'A manually operated cash drawer is the perfect choice for cash handling'),
(9, 'ATM Machine', 0, './upload/products/ATM01.png', 15129.99, 'The HALO II utilizes Nautilus Hyosung enhanced retail application, which enables customers to earn additional revenue from transactions such as Dynamic Currency Conversion (DCC), donations, lottery and surcharge segmentation.  The system is also positioned to support cardless cash withdrawals using an optional NFC (Near Field Communications) feature, an attractive option to users transitioning to cardless transactions. ', 'A manually operated cash drawer is the perfect choice for cash handling'),
(10, 'ATM Machine', 2, './upload/products/ATM.png', 19599.99, 'The HALO II utilizes Nautilus Hyosung enhanced retail application, which enables customers to earn additional revenue from transactions such as Dynamic Currency Conversion (DCC), donations, lottery and surcharge segmentation.  The system is also positioned to support cardless cash withdrawals using an optional NFC (Near Field Communications) feature, an attractive option to users transitioning to cardless transactions. ', 'A manually operated cash drawer is the perfect choice for cash handling'),
(11, 'Camera', 4, './upload/products/Cam2.png', 119.99, '50MP Full-Frame Exmor RS BSI CMOS Sensor\r\nUp to 30 fps Shooting, ISO 50-102400\r\n8K 30p and 4K 120p Video in 10-Bit\r\n4.3K 16-Bit Raw Video Output, S-Cinetone', 'A manually operated cash drawer is the perfect choice for cash handling'),
(12, 'IdeaCentre AIO 3', 3, './upload/products/Econmoic_Category.webp', 455.9, 'Budget friendly AMD Athlon™ processing.Space-saving all in one home PC with webcam privacy shutter', 'All In one computer'),
(13, 'IdeaCentre 3 (AMD)', 3, './upload/products/MOst_wanted.webp', 1100, 'Powerful budget friendly AMD Ryzen processing.Ports include 8 USB, HDMI, and optical disk drive Great for home use', 'PC with a good quality'),
(14, 'ThinkCentre M720 Tiny', 5, './upload/products/big_sale.webp', 2400, 'High-performance, space-saving PC\r\nIntel® Optane™-ready Tiny PC\r\nEnhanced security & energy efficient', 'Tiny with a power full CPU'),
(15, 'Pos Machine', 3, './upload/products/PosMachine.png', 200, 'The term “POS machine” is based on the assumption that there is one device that represents a whole checkout. The truth is that modern checkouts comprise of several hardware and software components', 'A manually operated cash drawer is the perfect choice for cash handling');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
