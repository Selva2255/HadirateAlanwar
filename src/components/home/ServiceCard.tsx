import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  path, 
  color 
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(path);
  };
  
  return (
    <div 
      className="service-card group"
      onClick={handleClick}
    >
      <div className={`p-4 rounded-full ${color} bg-opacity-10 mb-2 transition-all duration-300 group-hover:scale-110`}>
        <Icon size={32} className={color} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;